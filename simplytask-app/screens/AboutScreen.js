import { StyleSheet, View, Text, Linking } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../common/theme-context';

export function AboutScreen( { navigation }) {

    const {theme, setTheme, saveTheme} = useContext(ThemeContext);

    return (
      <View style={[styles.container, {backgroundColor:theme.background}]}>
        <Text style={[styles.paragraph, {color: theme.primaryText}]}>
            SimplyTask is a minimalist to-do list and task management app, with some gamification elements, made as part of the 
            final project for the BSc in Computer Science degree at the University of London.
        </Text>
        <Text style={[styles.paragraph, {color: theme.primaryText}]}>
            {"Avatar icons used in this app were made by "} 
            <Text 
                style={{color: theme.interactiveText, textDecorationLine:'underline'}}
                onPress={() => Linking.openURL('https://www.flaticon.com/authors/freepik')}
            >
                Freepik 
            </Text>
            {", from "}
            <Text 
                style={{color: theme.interactiveText, textDecorationLine:'underline'}}
                onPress={() => Linking.openURL('https://www.flaticon.com/')}
            >
                www.flaticon.com
            </Text>
        </Text>
        <Text style={[styles.paragraph, {color: theme.primaryText}]}>
            {"Karma icon was made by "} 
            <Text 
                style={{color: theme.interactiveText, textDecorationLine:'underline'}}
                onPress={() => Linking.openURL('https://www.flaticon.com/authors/Irfansusanto20')}
            >
                Irfansusanto20 
            </Text>
            {", from "}
            <Text 
                style={{color: theme.interactiveText, textDecorationLine:'underline'}}
                onPress={() => Linking.openURL('https://www.flaticon.com/')}
            >
                www.flaticon.com
            </Text>
        </Text>
      </View>
    );

}

/** STYLES */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    paragraph: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '92%',
        fontSize: 16,
        marginTop: 10,
        marginLeft: '4%',
        marginRight: '4%',
    },
});