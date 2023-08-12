import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import { ListScreen } from '../screens/ListScreen';
import { ListsDrawerContent } from './ListsDrawerContent';
import { IconButton } from '../components/Navigation';
import { TextButton } from '../components/Navigation';
import { ThemeContext } from '../common/theme-context';
import { ListDataContext } from '../common/list-context';

const Drawer = createDrawerNavigator();

export function ListsDrawer({route, navigation}) {

    // const additionalParams = {listNames: [...listsData], currentList: currentList, updateCurrentListCallback: updateCurrentListCallback}
    const {theme, setTheme} = useContext(ThemeContext);
    const {listData, setListData} = useContext(ListDataContext);

    return (
      <Drawer.Navigator
        initialRouteName='List'
        drawerContent={(props) => <ListsDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="List" 
          component={ListScreen} 
          initialParams={{listID: listData.selectedList.listID, listName: listData.selectedList.listName}}
          options={
            ({ route, navigation }) => ({ 
              headerStyle: {backgroundColor: theme.background, borderBottomColor: theme.borderColour, borderBottomWidth: 1},
              headerTitle: route.params.listName,
              headerTintColor: theme.primaryText,
              headerShadowVisible: true,
              headerRight: (props) => (
                // <IconButton
                //   title="plus"
                //   image={require('../assets/images/plus.png')}
                //   onPress={() => {
                //     navigation.navigate('CreateNewList');
                //   }}
                // ></IconButton>
                <TextButton
                  text="+"
                  onPress={() => {
                    navigation.navigate('CreateNewList');
                  }}
                ></TextButton>
              ),
            })
          }
        />
      </Drawer.Navigator>
    );

}