import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useContext } from "react";
import { ListContext, ListDataContext } from "../common/list-context";
import { ThemeContext } from "../common/theme-context";
import { SettingsContext } from "../common/settings-context";



/** LIST NAME COMPONENT */
export function ListName(props) {
    const {currentList, setCurrentList} = useContext(ListContext);
    const updatedCurrentList = {...currentList};
    const {theme, setTheme} = useContext(ThemeContext);
    

    return(
        <TouchableOpacity
            style={currentList.listID == props.id ? [styles.activeItem, {backgroundColor: theme.buttonColorful}] : styles.item}
            onPress={ () => {
                updatedCurrentList.listID = props.id;
                updatedCurrentList.listName = props.name;
                updatedCurrentList.listIndex = props.listIndex;
                console.log(updatedCurrentList);
                setCurrentList(updatedCurrentList);
                props.navigation.navigate('List', {listID: props.id, listName: props.name});
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
    const {listData, setListData, saveListData} = useContext(ListDataContext);
    const updatedListData = [...listData];
    const {currentList, setCurrentList} = useContext(ListContext);
    const {theme, setTheme} = useContext(ThemeContext);
    const {settingsData, setSettingsData, saveSettingsData} = useContext(SettingsContext);
    const updatedSettingsData = {...settingsData};

    return(
        <View style={[styles.taskCard, {backgroundColor: theme.cardBackground}]}>
            <TouchableOpacity 
                style={styles.taskCircleTouch}
                onPress={() => {                                        
                    for (var i = updatedListData[currentList.listIndex].tasks.length - 1; i >= 0; i--) {
                        if (updatedListData[currentList.listIndex].tasks[i].taskID == props.id) {
                            const completedTaskObj = updatedListData[currentList.listIndex].tasks[i];
                            updatedListData[currentList.listIndex].tasks.splice(i, 1);
                            updatedListData[currentList.listIndex].completed.push(completedTaskObj);
                            updatedSettingsData.karma += 1;

                            break;
                        }
                    }
                    setListData(updatedListData);
                    saveListData(updatedListData);
                    setSettingsData(updatedSettingsData);
                    saveSettingsData(updatedSettingsData);
                }}
            >
                <View style={[styles.taskCircle, {borderColor: theme.borderColour}]}></View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.taskTextTouch}
                onPress={props.detailsOnPress}
            >
                <Text numberOfLines={1} style={[styles.taskText, {color: theme.primaryText}]}>{props.taskName}</Text>
            </TouchableOpacity>
        </View>
    );
}

/** COMPLETED TASK COMPONENT */
export function CompletedTask(props) {
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <View style={[styles.taskCard, {backgroundColor: theme.cardBackground}]}>
            <View style={styles.taskCircleTouch}>
                <View style={[styles.taskCircle, {backgroundColor: theme.background, borderColor: theme.borderColour}]}></View>
            </View>
            <View style={styles.taskTextTouch}>
                <Text numberOfLines={1} style={[styles.completedTaskText, {color: theme.disabledText, }]}>{props.taskName}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
    },
    activeItem: {
        padding: 16,
        // backgroundColor: '#f0f0f0',
    },
    taskCard: {
        width: '92%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '4%',
        marginLeft: '4%',
        marginRight: '4%',
        borderRadius: 10
    },
    taskCircleTouch: {
        // backgroundColor:'red', 
        width: '8%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: '2%',
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
    },
    completedTaskText: {
        fontSize: 16,
        textAlign: 'left',
        // textDecorationLine: 'line-through', 
        // textDecorationStyle: 'solid'
    }
});