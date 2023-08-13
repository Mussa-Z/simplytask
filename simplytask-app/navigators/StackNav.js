import { Button, Keyboard } from 'react-native';
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
                            headerStyle: {backgroundColor: theme.background},
                            headerTintColor: theme.primaryText
                          }}
        >
            <Stack.Screen options={{headerShown: false}} name="BottomMenuWrapper" component={BottomTabs} />

            <Stack.Screen 
                name="Details" 
                component={DetailsScreen} 
                initialParams={{taskObj: {}, hasChanged: false}}         
                options={
                    ({ route, navigation }) => ({ 
                        headerTitle: 'Task Details',
                        headerRight: (props) => (
                            <Button 
                                title='Save'
                                disabled={route.params.hasChanged ? false : true}
                                color={theme.buttonColorful}
                                onPress={() => {
                                    if (route.params.hasChanged){

                                        const updatedTaskObj = route.params.taskObj;
                                         
                                        for (var i = updatedListData[currentList.listIndex].tasks.length - 1; i >= 0; i--) {
                                            if (updatedListData[currentList.listIndex].tasks[i].taskID == updatedTaskObj.taskID) {
                                                updatedListData[currentList.listIndex].tasks[i] = updatedTaskObj;
                                                break;
                                            }
                                        }
                                        setListData(updatedListData);
                                        // navigation.navigate('List', {listID: currentList.listID, listName: currentList.listName});
                                        Keyboard.dismiss();
                                        navigation.setParams({
                                            hasChanged: false,
                                        });
                                    }

                                }}
                        />
                        ),
                    })
                }
            />

            <Stack.Screen 
                name="CreateNewList"
                component={CreateNewListScreen}
                initialParams={{listName: ''}}
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
                                        const newListID = "list_" + new Date().getTime();
                                        const newListName = route.params.listName;
                                        const newListObj = {"listID": newListID, 
                                                            "listName": newListName,
                                                            "tasks": [],
                                                            "completed": []};
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
                        ),
                    })
                }
            
            />
        </Stack.Navigator>   
    );
}