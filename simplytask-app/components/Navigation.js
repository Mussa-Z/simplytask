import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../common/theme-context";

/** ICON BUTTON COMPONENT */
export function IconButton(props) {
    return(
        <TouchableOpacity style={styles.iconButton} onPress={props.onPress}>
            <Image
                source={props.image}
                style={styles.iconImage}
            />
        </TouchableOpacity>
    );
}

/** TOP NAV BAR */
export function TopNavBar() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <View style ={[styles.topBar, {backgroundColor: theme.background}]}>
            <Image
                source={require('../assets/images/avatars/02.png')}
                style={styles.avatarImage}
            />
            <View style={styles.karmaCounterBg}>
                <Text style={{color:theme.primaryText}}>00</Text>
            </View>
            
      </View>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '16%'
    },
    iconImage: {
        width: 16,
        height: 16,
    },
    topBar: {
        // backgroundColor: '#DDCECE', // DEBUG: 'red'
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatarImage: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginLeft: '4%'
    },
    karmaCounterBg: {
        backgroundColor: '#3fa3bd',
        width: 40,
        height: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '4%',
        zIndex: 1,
    },
});