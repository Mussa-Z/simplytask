import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useContext } from 'react';
import { ListName } from '../components/ListComponents';
import { ListDataContext } from '../common/list-context';
import { ThemeContext } from '../common/theme-context';

export function ListsDrawerContent(props) {

  const {listData, setListData} = useContext(ListDataContext);
  const {theme, setTheme} = useContext(ThemeContext);

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
  );
}
