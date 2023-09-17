import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView } from 'react-native';
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
import { saveData } from './utils/save-utils';

export default function App() {

  const saveTheme = useCallback((themeObj) => {
    console.log("I just received a request to save theme. Request Acknowledged.");
    /** LOCAL STORAGE IS TURNED OFF DURING DEVEOLOPMENT TO SPEED UP USER TESTING. TURN ON PRIOR TO DEPLOYMENT */
    // saveData('theme', themeObj);
  }, []);

  const saveCurrentList = useCallback((listObj) => {
    console.log("I just received a request to save current list. Request Acknowledged.");
    /** LOCAL STORAGE IS TURNED OFF DURING DEVEOLOPMENT TO SPEED UP USER TESTING. TURN ON PRIOR TO DEPLOYMENT */
    // saveData('selectedList', listObj);
  }, []);

  const saveListData = useCallback((listDataArray) => {
    console.log("I just received a request to save list data. Request Acknowledged.");
    /** LOCAL STORAGE IS TURNED OFF DURING DEVEOLOPMENT TO SPEED UP USER TESTING. TURN ON PRIOR TO DEPLOYMENT */
    // saveData('listsData', listDataArray);
  }, []);

  const saveSettingsData = useCallback((settingsDataObj) => {
    console.log("I just received a request to save settings data. Request Acknowledged.");
    /** LOCAL STORAGE IS TURNED OFF DURING DEVEOLOPMENT TO SPEED UP USER TESTING. TURN ON PRIOR TO DEPLOYMENT */
    // saveData('settings', settingsDataObj);
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

  /** LOCAL STORAGE IS TURNED OFF DURING DEVEOLOPMENT TO SPEED UP USER TESTING. TURN ON PRIOR TO DEPLOYMENT */
  // load data from local storage or write default data to storage if none available
  // useEffect(() => { // useEffect to make sure DOM elements are loaded before getting data
  //   AsyncStorage.multiGet(['@simplyTaskTheme', '@simplyTaskList', '@simplyTaskLists', '@simplyTaskSettings'], (err, stores) => {
  //     if (stores != null) {
  //       stores.map((result, i, store) => {
  //         let key = store[i][0];
  //         let value = store[i][1];
  //         switch(key) {
  //           case "@simplyTaskTheme":
  //             setTheme(JSON.parse(value));
  //             break;
  //           case "@simplyTaskList":
  //             setCurrentList(JSON.parse(value));
  //             break;
  //           case "@simplyTaskLists":
  //             setListData(JSON.parse(value));
  //             break;
  //           case "@simplyTaskSettings":
  //             setSettingsData(JSON.parse(value));
  //             break;
  //         }
  //       });
  //     } else { // no save data found, write default data to storage
  //       let multi_set_pairs = [
  //         ['@simplyTaskTheme', JSON.stringify(themes.dark)],
  //         ['@simplyTaskList', JSON.stringify(defaultData.data.selectedList)],
  //         ['@simplyTaskLists', JSON.stringify(defaultData.data.lists)],
  //         ['@simplyTaskSettings', JSON.stringify(DEFAULT_SETTINGS)]
  //       ];
  //       AsyncStorage.multiSet(multi_set_pairs, err => {
  //         console.log('wrote default data to local storage');
  //       }).catch((err) => {
  //         console.log('an error occured while writing data to async storage. error was: ' + err);
  //       });
  //     }
  //   }).catch((err) => {
  //     console.log('an error occured while reading async storage. error was: ' + err);
  //   });
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

/** STYLES */
const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    width: '100%'
  },
});
