import { StyleSheet, View, Text, Button } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../common/theme-context';

export function DetailsScreen( { navigation }) {
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text>Details Screen</Text>
            <Button 
                title="View details...again"
                onPress={() => navigation.push('Details')}
            />
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