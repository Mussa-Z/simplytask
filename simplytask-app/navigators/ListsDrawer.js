import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import { ListScreen } from '../screens/ListScreen';
import { ListsDrawerContent } from './ListsDrawerContent';
import { IconButton } from '../components/Navigation';
import { ThemeContext } from '../common/theme-context';

const Drawer = createDrawerNavigator();

export function ListsDrawer({route, navigation}) {

    // const additionalParams = {listNames: [...listsData], currentList: currentList, updateCurrentListCallback: updateCurrentListCallback}
    const {theme, setTheme} = useContext(ThemeContext);
    return (
      <Drawer.Navigator
        screenOptions={{backgroundColor: 'yellow'}}
        initialRouteName='List'
        drawerContent={(props) => <ListsDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="List" 
          component={ListScreen} 
          initialParams={{listName: 'No List Selected'}}
          options={
            ({ route, navigation }) => ({ 
              headerStyle: {backgroundColor: theme.background, borderBottomColor: theme.borderColour, borderBottomWidth: 1, },
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