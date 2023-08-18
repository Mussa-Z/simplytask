import { StyleSheet, View, Text } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../common/theme-context';

export function AboutScreen( { navigation }) {

    const {theme, setTheme} = useContext(ThemeContext);

    return (
      <View style={[styles.container, {backgroundColor:theme.background}]}>
        <Text>About Screen</Text>
      </View>
    );

}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});