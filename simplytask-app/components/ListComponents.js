import { StyleSheet, TouchableOpacity, View, Text, LayoutAnimation } from "react-native";
import { useContext } from "react";
import { ListContext, ListDataContext } from "../common/list-context";
import { ThemeContext, themes } from "../common/theme-context";
import { SettingsContext } from "../common/settings-context";
import Icon from '@expo/vector-icons/Feather';
import moment from 'moment';

/** LIST NAME COMPONENT */
export function ListName(props) {
    const {currentList, setCurrentList, saveCurrentList} = useContext(ListContext);
    const updatedCurrentList = {...currentList};
    const {theme, setTheme, saveTheme} = useContext(ThemeContext);   

    return(
        <TouchableOpacity
            style={currentList.listID == props.id ? [styles.activeItem, {backgroundColor: theme.buttonColorful}] : styles.item}
            onPress={ () => {
                updatedCurrentList.listID = props.id;
                updatedCurrentList.listName = props.name;
                updatedCurrentList.listIndex = props.listIndex;
                console.log(updatedCurrentList);
                setCurrentList(updatedCurrentList);
                saveCurrentList(updatedCurrentList);
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
    const {currentList, setCurrentList, saveCurrentList} = useContext(ListContext);
    const {theme, setTheme, saveTheme} = useContext(ThemeContext);
    const {settingsData, setSettingsData, saveSettingsData} = useContext(SettingsContext);
    const updatedSettingsData = {...settingsData};
    const layoutAnimConfig = {
        duration: 300,
        update: {
          type: LayoutAnimation.Types.easeInEaseOut
        },
        delete: {
          duration: 300,
          type: LayoutAnimation.Types.easeInEaseOut,
          property: LayoutAnimation.Properties.opacity,
        },
    };

    return(
        <View style={[styles.taskCard, {backgroundColor: theme.cardBackground, borderColor: theme.borderColour}]}>
            <TouchableOpacity 
                style={styles.taskCircleTouch}
                onPress={() => {                                        
                    for (var i = updatedListData[currentList.listIndex].tasks.length - 1; i >= 0; i--) {
                        if (updatedListData[currentList.listIndex].tasks[i].taskID == props.id) {

                            const completedTaskObj = updatedListData[currentList.listIndex].tasks[i];
                            completedTaskObj['dateCompleted'] = moment().format('YYYY-MM-DDTHH:mm:ss');

                            updatedListData[currentList.listIndex].tasks.splice(i, 1);
                            updatedListData[currentList.listIndex].completed.push(completedTaskObj);
                            updatedSettingsData.karma += 1;
                            updatedSettingsData.exp += 25;
                            
                            if (updatedSettingsData.exp >= settingsData.currentLevel.exp_required){
                                if (updatedSettingsData.currentLevel.index < updatedSettingsData.levels.length - 1){
                                    updatedSettingsData.currentLevel = updatedSettingsData.levels[updatedSettingsData.currentLevel.index + 1];
                                    updatedSettingsData.exp = 0;
                                } else {
                                    updatedSettingsData.exp = settingsData.currentLevel.exp_required;
                                }
                            }
                            break;
                        }
                    }
                    setListData(updatedListData);
                    LayoutAnimation.configureNext(layoutAnimConfig);
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
    const {theme, setTheme, saveTheme} = useContext(ThemeContext);
    return(
        <View style={[styles.taskCard, {backgroundColor: theme.cardBackground, borderColor: theme.borderColour}]}>
            <View style={styles.taskCircleTouch}>
                <View style={[styles.taskCircle, {backgroundColor: theme.background, borderColor: theme.borderColour}]}></View>
            </View>
            <View style={styles.taskTextTouch}>
                <Text numberOfLines={1} style={[styles.completedTaskText, {color: theme.disabledText, }]}>{props.taskName}</Text>
            </View>
        </View>
    );
}

/** THEME SELECT ROW COMPONENT */
export function ThemeSelection(props) {

    const {theme, setTheme, saveTheme} = useContext(ThemeContext);
    const {settingsData, setSettingsData, saveSettingsData} = useContext(SettingsContext);
    const isSelected = () => {
        return settingsData.theme == props.themeName;
    }; 

    return(
        <TouchableOpacity 
            style={[styles.cell, {borderColor: theme.borderColour}, isSelected() ? {backgroundColor: theme.drawerBackground} : 
                    {backgroundColor: theme.buttonNeutral}]}
            onPress={() => {
                if (isSelected() == false){
                    const updatedSettingsData = {...settingsData};
                    let selectedThemeObj = {...theme};

                    updatedSettingsData.theme = props.themeName;
                    setSettingsData(updatedSettingsData);
                    saveSettingsData(updatedSettingsData);

                    if(props.themeName == 'White') {
                        selectedThemeObj = themes.white;
                    } else if(props.themeName == 'Light') {
                        selectedThemeObj = themes.light;
                    } else if(props.themeName == 'Dark') {
                        selectedThemeObj = themes.dark;
                    } else { selectedThemeObj = themes.black;}

                    setTheme(selectedThemeObj);
                    saveTheme(selectedThemeObj);

                }
            }}
        >
            <Text style={[styles.label, {color:theme.primaryText}]}>{props.themeName}</Text>
            {isSelected() ? 
                <Icon 
                    style={{}}
                    name="check" 
                    size={24} 
                    color={theme.primaryText}
                /> : null
            }
        </TouchableOpacity>
    );
}

/** STYLES */
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
        borderRadius: 10,
        borderWidth: 1
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
    },
    cell: {
      flexDirection: 'row',
      width: '92%',
      height: 50,
      marginTop: 10,
      marginLeft: '4%',
      marginRight: '4%',
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1
    },
    label: {
      fontSize: 16,
    },
});