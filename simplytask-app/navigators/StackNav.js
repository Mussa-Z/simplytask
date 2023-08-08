import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabs } from './BottomTabs';
import { DetailsScreen } from '../screens/DetailsScreen';
import { CreateNewListScreen } from '../screens/CreateNewListScreen';

const Stack = createNativeStackNavigator();

export function StackNav() {
    return(
        <Stack.Navigator
            screenOptions={{headerBackTitle: 'Back', headerBackTitleVisible: true}}
        >
            <Stack.Screen options={{headerShown: false}} name="BottomMenuWrapper" component={BottomTabs} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen 
                name="CreateNewList"
                component={CreateNewListScreen}
                options={
                    ({ route, navigation }) => ({ 
                    headerTitle: 'Create new list',
                    headerRight: (props) => (
                        <Button 
                        title='Create'
                        onPress={() =>
                            navigation.navigate('List', {listName: route.params.listName})
                        }
                        />
                    ),
                    })
                }
            
            />
        </Stack.Navigator>   
    );
}