import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

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
    return (
        <View style ={styles.topBar}>
            <Text>Avatar Placeholder</Text>
            <Text>Lists</Text>
            <Text>Coins Placeholder</Text>
      </View>
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
    },
    topBar: {
        backgroundColor: '#DDCECE', // DEBUG: 'red'
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
    },
});