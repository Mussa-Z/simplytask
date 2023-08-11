import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useContext } from "react";
import { ListContext } from "../common/list-context";
import { ThemeContext } from "../common/theme-context";

/** LIST NAME COMPONENT */
export function ListName(props) {
    const {currentList, setCurrentList} = useContext(ListContext);
    return(
        <TouchableOpacity
            style={currentList == props.name ? styles.activeItem : styles.item}
            onPress={ () => {
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

/** TASK COMPONENT */
export function Task(props) {
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <View style={[styles.taskCard, {backgroundColor: theme.cardBackground}]}>
            <TouchableOpacity 
                style={styles.taskCircleTouch}
                onPress={() => {
                    alert('you checked off the task');
                }}
            >
                <View style={[styles.taskCircle, {borderColor: theme.borderColour}]}></View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.taskTextTouch}
                onPress={() => {
                    alert('you touched the task');
                }}
            >
                <Text numberOfLines={1} style={[styles.taskText, {color: theme.primaryText}]}>{props.taskName}</Text>
            </TouchableOpacity>
        </View>
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
    taskCard: {
        width: '92%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '4%',
        marginLeft: '4%',
        marginRight: '4%',
        borderRadius: 10
    },
    taskCircleTouch: {
        // backgroundColor:'red', 
        width: '10%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    taskCircle: {
        width: 32,
        height: 32,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderRadius: 16,
        zIndex: 1,
    },
    taskTextTouch: {
        // backgroundColor:'yellow', 
        width: '84%', 
        height: '100%', 
        justifyContent: 'center', 
        marginLeft: '3%', 
        marginRight: '3%'
    },
    taskText: {
        fontSize: 16,
        textAlign: 'left',
        zIndex: 1,
    }
});