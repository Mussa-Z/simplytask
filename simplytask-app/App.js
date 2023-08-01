import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function GroceriesList( { navigation } ) {
//   return (
//     <View style={styles.container}>
//       <Text>Groceries List</Text>
//       <Button 
//         title="View details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function PartyList( { navigation } ) {
//   return (
//     <View style={styles.container}>
//       <Text>Party List</Text>
//       <Button 
//         title="View details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function AssignmentToDos( { navigation } ) {
//   return (
//     <View style={styles.container}>
//       <Text>Assignment To Dos</Text>
//       <Button 
//         title="View details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

function ListScreen( { route, navigation }) {
  const listName = route.params.listName;
  return (
    <View style={styles.container}>
      <Text>{listName}</Text>
      <Button 
        title="View details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen( { navigation }) {
  return(
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button 
        title="View details...again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

function StatsScreen( { navigation }) {
  return (
    <View style={styles.container}>
      <Text>Stats Screen</Text>
    </View>
  );
}

function RewardsScreen( { navigation }) {
  return (
    <View style={styles.container}>
      <Text>Rewards Screen</Text>
    </View>
  );
}

function SettingsScreen( { navigation }) {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function ListDrawerContent({ navigation }) {
  return (
    <View>
      <Button 
        title = "Groceries List"
        onPress={ () => {
          navigation.navigate('List', {listName: 'Groceries List'});
        }}
      />
      <Button 
        title = "Party List"
        onPress={ () => {
          navigation.navigate('List', {listName: 'Party List'});
        }}
      />
      <Button 
        title = "Assignment To Dos"
        onPress={ () => {
          navigation.navigate('List', {listName: 'Assignment To Dos'});
        }}
      />
    </View>
  );
}

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

function ListsDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName='ListScreen'
      drawerContent={(props) => <ListDrawerContent {...props}/>}
    >
      <Drawer.Screen name="List" component={ListScreen} initialParams={{listName: 'No List Selected'}}/>
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Lists" component={ListsDrawer} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
