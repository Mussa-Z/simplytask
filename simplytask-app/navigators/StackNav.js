import { Button } from 'react-native';
import { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabs } from './BottomTabs';
import { DetailsScreen } from '../screens/DetailsScreen';
import { CreateNewListScreen } from '../screens/CreateNewListScreen';
import { ListContext, ListDataContext } from '../common/list-context';
import { ThemeContext } from '../common/theme-context';

const Stack = createNativeStackNavigator();

export function StackNav() {

    const {currentList, setCurrentList} = useContext(ListContext);
    const {listData, setListData} = useContext(ListDataContext);
    const updatedListData = [...listData];
    const updatedCurrentList = {...currentList}
    const {theme, setTheme} = useContext(ThemeContext);

    return(
        <Stack.Navigator
            screenOptions={{headerBackTitle: 'Back', headerBackTitleVisible: true,
                            headerStyle: {backgroundColor: theme.background, borderBottomColor: theme.borderColour, borderBottomWidth: 1},
                            headerTintColor: theme.primaryText
                          }}
        >
            <Stack.Screen options={{headerShown: false}} name="BottomMenuWrapper" component={BottomTabs} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen 
                name="CreateNewList"
                component={CreateNewListScreen}
                initialParams={{listID: '', listName: ''}}
                options={
                    ({ route, navigation }) => ({ 
                        headerTitle: 'Create new list',
                        headerRight: (props) => (
                            <Button 
                                title='Create'
                                disabled={route.params.listName == '' ? true : false}
                                color={theme.buttonColorful}
                                onPress={() => {
                                    if (route.params.listName != ''){
                                        // updatedListsData.push(route.params.listName);
                                        // setListData(updatedListsData);
                                        // setCurrentList(route.params.listName);
                                        // navigation.navigate('List', {listName: route.params.listName})
                                        /********************************************************* */
                                        // const newListID = "list_" + new Date().getTime();
                                        // const newListName = route.params.listName;
                                        // const newListObj = {"listID": newListID, 
                                        //                     "listName": newListName,
                                        //                     "tasks": []}
                                        // updatedListData.lists.push(newListObj);
                                        // updatedListData.selectedList.listID = newListID;
                                        // updatedListData.selectedList.listName = newListName;
                                        // console.log(updatedListData);
                                        // setListData(updatedListData);
                                        // navigation.navigate('List', {listID: newListID, listName: newListName})
                                        /********************************************************* */
                                        const newListID = "list_" + new Date().getTime();
                                        const newListName = route.params.listName;
                                        const newListObj = {"listID": newListID, 
                                                            "listName": newListName,
                                                            "tasks": []}
                                        updatedListData.push(newListObj);
                                        updatedCurrentList.listID = newListID;
                                        updatedCurrentList.listName = newListName;
                                        updatedCurrentList.listIndex = updatedListData.length - 1;
                                        console.log(updatedListData);
                                        console.log(updatedCurrentList);
                                        setListData(updatedListData);
                                        setCurrentList(updatedCurrentList);
                                        navigation.navigate('List', {listID: newListID, listName: newListName});
                                    }

                                }}
                        />
                        // <TouchableOpacity
                        //     style={currentList == props.name ? styles.activeItem : styles.item}
                        //     onPress={ () => {
                        //         setCurrentList(props.name);
                        //         props.navigation.navigate('List', {listName: props.name});
                        //     }}
                        // >
                        //     <View>
                        //         <Text>{props.name}</Text>
                        //     </View>
                        // </TouchableOpacity>
                        ),
                    })
                }
            
            />
        </Stack.Navigator>   
    );
}