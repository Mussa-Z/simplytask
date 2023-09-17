import { StyleSheet, View, Text, TouchableOpacity, Switch, LayoutAnimation } from 'react-native';
import { useContext, useState } from 'react';
import { themes, ThemeContext } from '../common/theme-context';
import { SettingsContext } from '../common/settings-context';
import Icon from '@expo/vector-icons/MaterialIcons';
/** imports for reset data */
import { ListContext, ListDataContext } from '../common/list-context';
import defaultData from '../assets/data/defaultData.json';
import { DEFAULT_SETTINGS } from '../common/settings-data';


export function SettingsScreen( { navigation }) {

    const {theme, setTheme, saveTheme} = useContext(ThemeContext);
    const {settingsData, setSettingsData, saveSettingsData} = useContext(SettingsContext);
    const updatedSettingsData = {...settingsData};
    const [isEnabled, setIsEnabled] = useState(settingsData.distractionFree);
    const toggleSwitch = () => setIsEnabled(!isEnabled);
    const layoutAnimConfig = {
      duration: 300,
      update: {
        type: LayoutAnimation.Types.easeInEaseOut
      },
      delete: {
        duration: 200,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
    };

    /** consts for reset data */
    const {currentList, setCurrentList, saveCurrentList} = useContext(ListContext);
    const {listData, setListData, saveListData} = useContext(ListDataContext);
    /** end of consts for reset data */

    return (
      <View style={[styles.container, {backgroundColor:theme.background}]}>

        {/** DISPLAY SETTINGS */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, {color:theme.secondaryText}]}>DISPLAY SETTINGS</Text>
          <View style={[styles.cell, {backgroundColor: theme.cardBackground, borderColor: theme.borderColour}]}>
            <Text style={[styles.label, {color:theme.primaryText}]}>Theme</Text>
            <TouchableOpacity 
              style={styles.settingButton}
              onPress={() => {
                navigation.navigate('themeSelection');
              }}
            >
              <Text style={[styles.label, {color:theme.primaryText}]}>{settingsData.theme}</Text>
              <Icon 
                style={{}}
                name="keyboard-arrow-right" 
                size={24} 
                color={theme.primaryText}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/** APP SETTINGS */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, {color:theme.secondaryText}]}>APP SETTINGS</Text>
          <View style={[styles.cell, {backgroundColor: theme.cardBackground, borderColor: theme.borderColour}]}>
            <Text style={[styles.label, {color:theme.primaryText}]}>Distraction-free Experience</Text>
            <Switch 
              trackColor={{false: theme.background, true: theme.buttonColorful}} //'#767577'
              thumbColor={isEnabled ? theme.primaryText : '#f4f3f4'}
              ios_backgroundColor={theme.background}  //"#3e3e3e"
              onValueChange={() => {
                updatedSettingsData.distractionFree = !isEnabled;
                setSettingsData(updatedSettingsData);
                LayoutAnimation.configureNext(layoutAnimConfig);
                saveSettingsData(updatedSettingsData);
                toggleSwitch();  
              }}
              value={isEnabled}
            />
          </View>
        </View>

        {/** HELP SETTINGS */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, {color:theme.secondaryText}]}>HELP</Text>
          <View style={[styles.cell, {backgroundColor: theme.cardBackground, borderColor: theme.borderColour}]}>
            <Text style={[styles.label, {color:theme.primaryText}]}>How this App Works</Text>
            <TouchableOpacity 
              style={styles.settingButton}
              onPress={() => {
                navigation.navigate('howto');
              }}
            >
              <Icon 
                style={{}}
                name="keyboard-arrow-right" 
                size={24} 
                color={theme.primaryText}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.cell, {backgroundColor: theme.cardBackground, borderColor: theme.borderColour}]}>
            <Text style={[styles.label, {color:theme.primaryText}]}>About</Text>
            <TouchableOpacity 
              style={styles.settingButton}
              onPress={() => {
                navigation.navigate('about');
              }}
            >
              <Icon 
                style={{}}
                name="keyboard-arrow-right" 
                size={24} 
                color={theme.primaryText}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/** DEBUG RESET DATA */}
        <TouchableOpacity 
          style={[styles.resetButton]}
          onPress={() => {

            setTheme(themes.dark);
            saveTheme(themes.dark);

            setCurrentList(defaultData.data.selectedList);
            saveCurrentList(defaultData.data.selectedList);

            setListData(defaultData.data.lists);
            saveListData(defaultData.data.lists);

            setSettingsData(DEFAULT_SETTINGS);
            saveSettingsData(DEFAULT_SETTINGS);
          }}
        >
          <Text style={[styles.resetText, {color:theme.buttonColorful}]}>reset app data</Text>
        </TouchableOpacity>

      </View>
    );
}

/** STYLES */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    section: {
      width: '100%',
      flexDirection: 'column',
      padding: '4%'
    },
    sectionHeader: {
      fontSize: 16,
    },
    cell: {
      flexDirection: 'row',
      width: '100%',
      height: 50,
      marginTop: 10,
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1
    },
    label: {
      fontSize: 16,
    },
    settingButton: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    resetButton: {
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      marginTop: 40
    },
    resetText: {
      padding: 10
    },
});