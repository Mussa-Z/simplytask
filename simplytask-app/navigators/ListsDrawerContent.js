import { View, ScrollView, Button, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useState } from 'react';

export function ListsDrawerContent(props) {
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItem 
        label="Groceries List"
        onPress={ () => {
          props.navigation.navigate('List', {listName: 'Groceries List'});
        }}
      />
      <DrawerItem 
        label="Party List" 
        onPress={ () => {
          props.navigation.navigate('List', {listName: 'Party List'});
        }}
      />
      <DrawerItem 
        label="Assignment To Dos" 
        onPress={ () => {
          props.navigation.navigate('List', {listName: 'Assignment To Dos'});
        }}
      />
    </DrawerContentScrollView>
  );
}

// export function ListsDrawerContent({ navigation }) {
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text>Lists</Text>
//         </View>
//         <View style={styles.scrollableView}>
//           <ScrollView>
//             <Button 
//               title = "Groceries List"
//               onPress={ () => {
//                 navigation.navigate('List', {listName: 'Groceries List'});
//               }}
//             />
//             <Button 
//               title = "Party List"
//               onPress={ () => {
//                 navigation.navigate('List', {listName: 'Party List'});
//               }}
//             />
//             <Button 
//               title = "Assignment To Dos"
//               onPress={ () => {
//                 navigation.navigate('List', {listName: 'Assignment To Dos'});
//               }}
//             />
//           </ScrollView>
//         </View>
//         {/* <View style={styles.footer}>
//           <Button 
//             title = "Add List"
//             onPress={ () => {
//               alert('add list was pressed');
//             }}
//           />
//           <Button 
//             title = "Delete List"
//             onPress={ () => {
//               alert('delete list was pressed');
//             }}
//           />
//         </View> */}
//       </View>
//     );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    // backgroundColor: '#e26d5c',
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  scrollableView: {
    // backgroundColor: '#f0ead2',
    flex: 1,
    width: '100%',
    paddingRight: '3%',
    paddingLeft: '3%',
  },
  footer: {
    // backgroundColor: '#e26d5c',
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
});