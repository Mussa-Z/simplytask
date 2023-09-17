import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import { ListScreen } from '../screens/ListScreen';
import { ListsDrawerContent } from './ListsDrawerContent';
import { ThemeContext } from '../common/theme-context';
import { ListContext } from '../common/list-context';
import Icon from '@expo/vector-icons/Entypo';

const Drawer = createDrawerNavigator();

export function ListsDrawer({route, navigation}) {

    // const additionalParams = {listNames: [...listsData], currentList: currentList, updateCurrentListCallback: updateCurrentListCallback}
    const {theme, setTheme} = useContext(ThemeContext);
    // const {listData, setListData} = useContext(ListDataContext);
    const {currentList, setCurrentList, saveCurrentList} = useContext(ListContext);

    return (
      <Drawer.Navigator
        initialRouteName='List'
        screenOptions={{headerStyle: {backgroundColor: theme.background}, 
                        headerTintColor: theme.primaryText}}
        drawerContent={(props) => <ListsDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="List" 
          component={ListScreen} 
          initialParams={{listID: currentList.listID, listName: currentList.listName}}
          options={
            ({ route, navigation }) => ({ 
              headerTitle: currentList.listName,
              headerTitleContainerStyle: {width: '70%'},
              headerTitleAlign: 'left',
              headerShadowVisible: true,
              headerRightContainerStyle: {width: '15%'},
              headerRight: (props) => (
                <Icon
                  style={{paddingRight: 14}}
                  name="plus" 
                  size={28} 
                  color={theme.buttonColorful} 
                  onPress={() => {
                    navigation.navigate('CreateNewList', {taskName: ''});
                  }}
                />
              ),
              headerLeftContainerStyle: {width: '15%'},
              headerLeft: (props) => (
                <Icon
                  style={{paddingLeft: 14}} 
                  name="menu" 
                  size={28} 
                  color={theme.buttonColorful} 
                  onPress={() => {
                    navigation.openDrawer();
                  }}
                />
              ),
            })
          }
        />
      </Drawer.Navigator>
    );

}