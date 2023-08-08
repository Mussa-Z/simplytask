import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TopNavBar } from './navigators/TopNavBar';
import { ListContext, ListDataContext } from './common/list-context';
import { useState, useMemo } from 'react';
import { StackNav } from './navigators/StackNav';


const Stack = createNativeStackNavigator();

export default function App() {

  const [currentList, setCurrentList] = useState('No List Selected');
  const currentListName = useMemo(
    () => ({currentList, setCurrentList}),
    [currentList]
  );

  const startingData = ['Groceries List', 'Party List', 'Assignment To Dos', 'Moving Checklist', 'Additional Test', 'Birthday Party Checklist'];

  const [listData, setListData] = useState(startingData);
  const lists = useMemo(
    () => ({listData, setListData}),
    [listData]
  );

  return (

    <ListContext.Provider value={currentListName}>

      <ListDataContext.Provider value={lists}>

        <SafeAreaView style={styles.safeView}>

          <TopNavBar></TopNavBar>

          <NavigationContainer>

              <StackNav></StackNav>

          </NavigationContainer>

        </SafeAreaView>

      </ListDataContext.Provider>

    </ListContext.Provider>

  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    width: '100%'
  },
});
