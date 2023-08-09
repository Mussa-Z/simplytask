import { Button } from 'react-native';
import { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabs } from './BottomTabs';
import { DetailsScreen } from '../screens/DetailsScreen';
import { CreateNewListScreen } from '../screens/CreateNewListScreen';
import { ListContext, ListDataContext } from '../common/list-context';

const Stack = createNativeStackNavigator();

export function StackNav() {

    const {currentList, setCurrentList} = useContext(ListContext);
    const {listData, setListData} = useContext(ListDataContext);
    const updatedListsData = [...listData];

    return(
        <Stack.Navigator
            screenOptions={{headerBackTitle: 'Back', headerBackTitleVisible: true}}
        >
            <Stack.Screen options={{headerShown: false}} name="BottomMenuWrapper" component={BottomTabs} />
            <Stack.Screen name="Details" component={DetailsScreen} />
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
                                onPress={() => {
                                    if (route.params.listName != ''){
                                        updatedListsData.push(route.params.listName);
                                        setListData(updatedListsData);
                                        setCurrentList(route.params.listName);
                                        navigation.navigate('List', {listName: route.params.listName})
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