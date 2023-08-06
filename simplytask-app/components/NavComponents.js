import { StyleSheet, TouchableOpacity, Image } from "react-native";

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

const styles = StyleSheet.create({
    iconButton: {
        flex: 1,
        paddingRight: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImage: {
        width: 16,
        height: 16,
    }
});