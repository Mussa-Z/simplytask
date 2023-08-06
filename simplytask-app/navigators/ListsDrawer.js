import { createDrawerNavigator } from '@react-navigation/drawer';
import { ListScreen } from '../screens/ListScreen';
import { CreateNewListScreen } from '../screens/CreateNewListScreen';
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

export function ListsDrawer() {
    return (
      <Drawer.Navigator
        initialRouteName='List'
        drawerContent={(props) => <ListsDrawerContent {...props}/>}
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

        <Drawer.Screen 
          name="CreateNewList"
          component={CreateNewListScreen}
          options={
            {
              headerTitle: 'Create new list',
              headerRight: (props) => (
                <Button 
                  title='Create'
                  onPress={() => alert('Create list button pressed')}
                />
              ),
            }
          }
        />

      </Drawer.Navigator>
    );
}