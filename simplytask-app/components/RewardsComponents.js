import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../common/theme-context";

/** AVATAR COMPONENT */
export function Avatar(props) {

    const {theme, setTheme} = useContext(ThemeContext);

    return(
        <TouchableOpacity 
            style={styles.avatarButton} 
            onPress={() => {
                alert('pressed avatar');
            }}
        >
            <Image
                source={props.image}
                style={{width: props.size, height: props.size}}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    avatarButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '4%'
    },
});