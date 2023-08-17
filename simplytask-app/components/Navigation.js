import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../common/theme-context";
import { SettingsContext } from "../common/settings-context";

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
    const {settingsData, setSettingsData, saveSettingsData} = useContext(SettingsContext);

    return (
        <View style ={[styles.topBar, {backgroundColor: theme.background}]}>
            <Image
                source={settingsData.chosenAvatar.uri}
                style={styles.avatarImage}
            />
            <View style={styles.coinsContainer}>
                <Image
                    source={require('../assets/images/triskelion.png')}
                    style={styles.coinImage}
                />
                <View style={[styles.karmaCounterBg, {backgroundColor: theme.buttonNeutral}]}>
                    <Text style={[styles.karmaCounterText, {color:theme.buttonNeutralText}]}>{settingsData.karma}</Text>
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
    avatarImage: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginLeft: '4%'
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
        zIndex: 1,
        position: 'absolute',
        right: 45
        
    },
    karmaCounterBg: {
        width: 60,
        height: 20,
        borderRadius: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: '4%',
    },
    karmaCounterText : {
        paddingRight: 10,
    },
});