import { createDrawerNavigator } from '@react-navigation/drawer';
import { ListScreen } from '../screens/ListScreen';
import { ListsDrawerContent } from './ListsDrawerContent';
import { IconButton } from '../components/Navigation';

const Drawer = createDrawerNavigator();

export function ListsDrawer({route, navigation}) {

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