import { StyleSheet, View, Text } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../common/theme-context';

export function StatsScreen( { navigation }) {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
      <View style={[styles.container, {backgroundColor:theme.background}]}>
        <Text>Stats Screen</Text>
      </View>
    );
}
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});