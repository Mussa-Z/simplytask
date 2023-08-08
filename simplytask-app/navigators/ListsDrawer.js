import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';
import { ListScreen } from '../screens/ListScreen';
import { ListsDrawerContent } from './ListsDrawerContent';
import { Button } from 'react-native';
import { IconButton } from '../components/NavComponents';

const Drawer = createDrawerNavigator();

// function ListsDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Groceries List" component={GroceriesList} />
//       <Drawer.Screen name="Party List" component={PartyList} />
//       <Drawer.Screen name="Assignment To Dos" component={AssignmentToDos} />
//     </Drawer.Navigator>
//   );
// }

export function ListsDrawer({route, navigation}) {

    // const [listsData, setListsData] = useState(['Groceries List', 'Party List', 'Assignment To Dos', 'Moving Checklist', 'Additional Test']);
    // const [currentList, setCurrentList] = useState('');
    
    // function addListCallback(listName) {
    //   if(listName != '') {
    //     const updatedListsData = [...listsData];
    //     updatedListsData.push(listName);
    //     setListsData(updatedListsData);
    //   }
    // } 

    // function updateCurrentListCallback(listId) {
    //   if (listId != '') {
    //     setCurrentList(listId);
    //   }
    // }
    // const additionalParams = {listNames: [...listsData], currentList: currentList, updateCurrentListCallback: updateCurrentListCallback}

    return (
      <Drawer.Navigator
        initialRouteName='List'
        drawerContent={(props) => <ListsDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="List" 
          component={ListScreen} 
          initialParams={{listName: 'No List Selected'}}
          options={
            ({ route, navigation }) => ({ 
              headerTitle: route.params.listName,
              headerRight: (props) => (
                <IconButton
                  title="plus"
                  image={require('../assets/images/plus.png')}
                  onPress={() => {
                    navigation.navigate('CreateNewList');
                  }}
                ></IconButton>
              ),
            })
          }
        />
      </Drawer.Navigator>
    );

}