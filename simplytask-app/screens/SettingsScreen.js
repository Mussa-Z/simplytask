import { StyleSheet, View, Text, TouchableOpacity, Switch, LayoutAnimation } from 'react-native';
import { useContext, useState } from 'react';
import { ThemeContext } from '../common/theme-context';
import { SettingsContext } from '../common/settings-context';
import Icon from '@expo/vector-icons/MaterialIcons';


export function SettingsScreen( { navigation }) {

    const {theme, setTheme} = useContext(ThemeContext);
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

    return (
      <View style={[styles.container, {backgroundColor:theme.background}]}>

        {/** DISPLAY SETTINGS */}
        <View style={styles.section}>
          <Text style={[styles.sectionHeader, {color:theme.disabledText}]}>DISPLAY SETTINGS</Text>
          <View style={[styles.cell, {backgroundColor: theme.cardBackground}]}>
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
          <Text style={[styles.sectionHeader, {color:theme.disabledText}]}>APP SETTINGS</Text>
          <View style={[styles.cell, {backgroundColor: theme.cardBackground}]}>
            <Text style={[styles.label, {color:theme.primaryText}]}>Distraction-free Experience</Text>
            <Switch 
              trackColor={{false: '#767577', true: theme.buttonColorful}}
              thumbColor={isEnabled ? theme.primaryText : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
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
          <Text style={[styles.sectionHeader, {color:theme.disabledText}]}>HELP</Text>
          <View style={[styles.cell, {backgroundColor: theme.cardBackground}]}>
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
          <View style={[styles.cell, {backgroundColor: theme.cardBackground}]}>
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

      </View>
    );
}

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
      justifyContent: 'space-between'
    },
    label: {
      fontSize: 16,
    },
    settingButton: {
      flexDirection: 'row',
      alignItems: 'center'
    }
});