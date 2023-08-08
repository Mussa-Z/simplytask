import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useContext } from "react";
import { ListContext } from "../common/list-context";

/** LIST NAME COMPONENT */
export function ListName(props) {
    const {currentList, setCurrentList} = useContext(ListContext);
    return(
        <TouchableOpacity
            // style={props.isFocused ? styles.activeItem : styles.item}
            style={currentList == props.name ? styles.activeItem : styles.item}
            onPress={ () => {
                // props.updateCurrentListCallback(props.name);
                setCurrentList(props.name);
                props.navigation.navigate('List', {listName: props.name});
            }}
        >
            <View>
                <Text>{props.name}</Text>
            </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
    },
    activeItem: {
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
});