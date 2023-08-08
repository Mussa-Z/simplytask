import { View, ScrollView, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useState, useContext } from 'react';
import { ListName } from '../components/ListComponents';
import { ListDataContext } from '../common/list-context';

export function ListsDrawerContent(props) {
  // const [currentList, setCurrentList] = useState('');
  // const [listsData, setListsData] = useState(['Groceries List', 'Party List', 'Assignment To Dos', 'Moving Checklist']);

  // function updateCurrentListCallback(listId) {
  //   if (listId != '') {
  //     setCurrentList(listId);
  //   }
  // }

  const {listData, setListData} = useContext(ListDataContext);

  return(
    <DrawerContentScrollView {...props}>
      {/* {listsData.map((element, index) => ( */}
      {listData.map((element, index) => (
        <ListName
          key={index}
          name={element}
          // isFocused={props.currentList == element ? true : false}
          // updateCurrentListCallback={props.updateCurrentListCallback}
          navigation={props.navigation}
        ></ListName>
      ))}
    </DrawerContentScrollView>
  );
}
