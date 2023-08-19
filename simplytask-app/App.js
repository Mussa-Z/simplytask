import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TopNavBar } from './components/Navigation';
import { themes, ThemeContext } from './common/theme-context';
import { ListContext, ListDataContext } from './common/list-context';
import { SettingsContext } from './common/settings-context';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { StackNav } from './navigators/StackNav';
import AsyncStorage from '@react-native-async-storage/async-storage';
import defaultData from './assets/data/defaultData.json';
import { DEFAULT_SETTINGS } from './common/settings-data';


export default function App() {

  const saveTheme = useCallback((themeObj) => {
    console.log("I just received a request to save theme. Request Acknowledged.")
  }, []);

  const saveCurrentList = useCallback((listObj) => {
    console.log("I just received a request to save current list. Request Acknowledged.")
  }, []);

  const saveListData = useCallback((listDataArray) => {
    console.log("I just received a request to save list data. Request Acknowledged.")
  }, []);

  const saveSettingsData = useCallback((settingsDataObj) => {
    console.log("I just received a request to save settings data. Request Acknowledged.")
  }, []);
  
  const [theme, setTheme] = useState(themes.dark);
  const selectedTheme = useMemo(
    () => ({theme, setTheme, saveTheme}),
    [theme]
  );

  const [currentList, setCurrentList] = useState(defaultData.data.selectedList);
  const currentListName = useMemo(
    () => ({currentList, setCurrentList, saveCurrentList}),
    [currentList]
  );

  // const startingData = ['Groceries List', 'Party List', 'Assignment To Dos', 'Moving Checklist', 'Additional Test', 'Birthday Party Checklist'];
  // const [listData, setListData] = useState(startingData);
  const [listData, setListData] = useState(defaultData.data.lists);
  const lists = useMemo(
    () => ({listData, setListData, saveListData}),
    [listData]
  );

  const [settingsData, setSettingsData] = useState(DEFAULT_SETTINGS);
  const settings = useMemo(
    () => ({settingsData, setSettingsData, saveSettingsData}),
    [settingsData]
  );

  // load data from local storage or default data if none available on first load
  // useEffect(() => { //useEffect to make sure DOM elements are loaded before getting data
  //   if (listData.length == 0) {
  //     AsyncStorage.getItem('@simplyTaskData').then((obj) => {
  //       if(obj != null) {
  //         setListData(JSON.parse(obj));
  //         console.log('wrote data from ASYNC storage');
  //       } else {
  //         AsyncStorage.setItem('@simplyTaskData', 
  //           JSON.stringify(defaultData.data)).then(() => {
  //             console.log('wrote default data to local storage');
  //           });
  //       }
  //     }).catch((err) => {
  //       console.log('an error occured while reading async storage');
  //     });
  //   }
  // }, []);

  return (
    <ThemeContext.Provider value={selectedTheme}>

      <ListContext.Provider value={currentListName}>

        <ListDataContext.Provider value={lists}>

          <SettingsContext.Provider value={settings}>

            <SafeAreaView style={[styles.safeView, {backgroundColor: theme.background}]}>

              {
                settingsData.distractionFree == false ?
                <TopNavBar></TopNavBar> : null
              }
              
              <NavigationContainer>

                  <StackNav></StackNav>

              </NavigationContainer>

            </SafeAreaView>

          </SettingsContext.Provider>

        </ListDataContext.Provider>

      </ListContext.Provider>

    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    width: '100%'
  },
});
