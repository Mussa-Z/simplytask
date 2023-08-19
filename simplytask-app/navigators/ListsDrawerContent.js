import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useContext } from 'react';
import { ListName } from '../components/ListComponents';
import { ListContext, ListDataContext } from '../common/list-context';
import { ThemeContext } from '../common/theme-context';

export function ListsDrawerContent(props) {

  const {currentList, setCurrentList, saveCurrentList} = useContext(ListContext);
  const {listData, setListData, saveListData} = useContext(ListDataContext);
  const {theme, setTheme, saveTheme} = useContext(ThemeContext);

  const removeList = (listObj) => {
    const updatedListData = [...listData]; 
    let arr = updatedListData.filter(function(item) {
      return item.listID != listObj.listID;
    });
    const updatedCurrentList = {...currentList};
    updatedCurrentList.listID = arr[0].listID;
    updatedCurrentList.listName = arr[0].listName;
    updatedCurrentList.listIndex = 0;
    setCurrentList(updatedCurrentList);
    saveCurrentList(updatedCurrentList);
    setListData(arr);
    saveListData(arr);
  }; 

  // return(
  //   <DrawerContentScrollView style={{backgroundColor: theme.drawerBackground}} {...props}>
  //     {listData.map((element, index) => (
  //       <ListName
  //         key={index}
  //         name={element}
  //         navigation={props.navigation}
  //       ></ListName>
  //     ))}
  //   </DrawerContentScrollView>
  // );
  // return(
  //   <DrawerContentScrollView style={{backgroundColor: theme.drawerBackground}} {...props}>
  //     {listData.lists.map((element, index) => 
  //       {
  //         console.log('drawer content:' + element.listID);
  //         return (
  //           <ListName
  //             key={index}
  //             id={element.listID}
  //             name={element.listName}
  //             navigation={props.navigation}
  //           ></ListName>
  //         )
  //       }

  //     )}
  //   </DrawerContentScrollView>
  // );
  return(
    <View style={[styles.container, {backgroundColor: theme.drawerBackground}]}>
      <DrawerContentScrollView style={{backgroundColor: theme.drawerBackground}} {...props}>
        {listData.map((element, index) => 
          {
            console.log('drawer content:' + element.listID + ' ' + element.listName);
            return (
              <ListName
                key={element.listID}
                id={element.listID}
                listIndex={index}
                name={element.listName}
                navigation={props.navigation}
              ></ListName>
            )
          }
        )}

      </DrawerContentScrollView>
      <TouchableOpacity 
        style={[styles.delButton, {backgroundColor:theme.buttonNeutral}]}
        onPress={() => {
          removeList(currentList);
        }}
      >
        <Text style={[styles.delText, {color:theme.buttonColorful}]}>delete selected list</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  delButton: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  delText: {
    padding: 10
  },
});