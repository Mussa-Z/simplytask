import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TopNavBar } from './navigators/TopNavBar';
import { BottomTabs } from './navigators/BottomTabs';
import { DetailsScreen } from './screens/DetailsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeView}>

      {/* TOP NAVIGATIOIN BAR */ }
      <TopNavBar></TopNavBar>

      <NavigationContainer>
       {/* to hide header on all screens, add to stack.navigator: screenOptions={{headerShown: false}} */}
       {/* <Stack.Navigator> 
            <Stack.Screen options={{headerShown: false}} name="Lists" component={ListsDrawer}/>
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator> */}
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="BottomMenuWrapper" component={BottomTabs} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeView: {
    flex: 1,
    width: '100%'
  },
  topBar: {
    backgroundColor: '#DDCECE', // DEBUG: 'red'
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
