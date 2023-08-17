import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
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
                alert('pressed theme setting');
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
                saveSettingsData(updatedSettingsData);
                toggleSwitch();  
              }}
              value={isEnabled}
            />
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