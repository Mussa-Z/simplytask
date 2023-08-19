import { StyleSheet, View, Text } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../common/theme-context';
import { SettingsContext } from '../common/settings-context';
import { ThemeSelection } from '../components/ListComponents';

export function ThemeSelectionScreen( { navigation }) {

    const {theme, setTheme, saveTheme} = useContext(ThemeContext);
    const {settingsData, setSettingsData, saveSettingsData} = useContext(SettingsContext);

    return (
      <View style={[styles.container, {backgroundColor:theme.background}]}>
        {settingsData.themeOptions.map((element, index) => 
          {
            return (
              <ThemeSelection
                key={index}
                themeName={element}
              />
            )
          }
        )}

      </View>
    );

}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});