import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../common/theme-context";
import { SettingsContext } from "../common/settings-context";
import Icon from '@expo/vector-icons/Feather';

/** AVATAR COMPONENT */
export function Avatar(props) {

    const {theme, setTheme} = useContext(ThemeContext);
    const {settingsData, setSettingsData, saveSettingsData} = useContext(SettingsContext);
    const updatedSettingsData = {...settingsData};

    return(
        <View style={styles.container}>
 
            <TouchableOpacity 
                style={styles.avatarButton} 
                onPress={() => {
                    const chosenAvatarObj = {...settingsData.avatars[props.index]}
                    updatedSettingsData.chosenAvatar = chosenAvatarObj;
                    setSettingsData(updatedSettingsData);
                    saveSettingsData(updatedSettingsData);
                }}
            >
                <Image
                    source={props.image}
                    style={{width: props.size, height: props.size}}
                />
            </TouchableOpacity>

            {props.status == 'locked' ?
                    <TouchableOpacity
                        style={[styles.unlockButton, {width: props.size, height: props.size, borderRadius: props.size / 2}]}
                        onPress={() => {
                            alert('pressed unlock avatar');
                        }}
                    >
                        <Icon 
                            style={{}}
                            name="lock" 
                            size={18} 
                            color={theme.buttonNeutral}
                        />
                        <View style={[styles.costContainer, {backgroundColor: theme.buttonNeutral}]}>
                            <Text style={[styles.costText, {color: theme.primaryText}]}>{props.cost}</Text>
                            <Image
                                source={require('../assets/images/triskelion.png')}
                                style={styles.coinImage}
                            />
                        </View>
                    
                    </TouchableOpacity>
            : null}   

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarButton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '4%',
    },
    unlockButton: {
        backgroundColor: 'rgba(0, 255, 255, 0.8)',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    costContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: 40,
        borderRadius: 8
    },
    costText: {
        fontSize: 12,
        marginLeft: 5
    },
    coinImage: {
        width: 14,
        height: 14,
        borderRadius: 7,
        marginRight: 5        
    },

});