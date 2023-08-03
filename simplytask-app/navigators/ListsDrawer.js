import { createDrawerNavigator } from '@react-navigation/drawer';
import { ListScreen } from '../screens/ListScreen'
import { ListsDrawerContent } from './ListsDrawerContent'

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
        initialRouteName='ListScreen'
        drawerContent={(props) => <ListsDrawerContent {...props}/>}
      >
        <Drawer.Screen name="List" component={ListScreen} initialParams={{listName: 'No List Selected'}}/>
      </Drawer.Navigator>
    );
}