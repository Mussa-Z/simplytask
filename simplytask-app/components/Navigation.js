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

/** TEXT BUTTON COMPONENT */
export function TextButton(props){
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <TouchableOpacity style={styles.iconButton} onPress={props.onPress}>
            <Text style={[styles.textButtonText, {color: theme.buttonColorful}]}>{props.text}</Text>
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
            <View style={styles.coinsContainer}>
                <Image
                    source={require('../assets/images/triskelion.png')}
                    style={styles.coinImage}
                />
                <View style={[styles.karmaCounterBg, {backgroundColor: theme.buttonNeutral}]}>
                    <Text style={{color:theme.buttonNeutralText}}>0</Text>
                </View>
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
    textButtonText: {
        fontSize: 28,
    },
    topBar: {
        // backgroundColor: '#DDCECE', // DEBUG: 'red'
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    coinsContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    coinImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    avatarImage: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginLeft: '4%'
    },
    karmaCounterBg: {
        width: 40,
        height: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '4%',
        zIndex: 1,
    },
});