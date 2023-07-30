import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen( { navigation } ) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
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
