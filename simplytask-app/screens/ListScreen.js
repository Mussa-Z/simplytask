import { StyleSheet, View, ScrollView, TextInput, Text, KeyboardAvoidingView, TouchableOpacity, Keyboard, LayoutAnimation } from 'react-native';
import { useContext, useState } from 'react';
import { ThemeContext } from '../common/theme-context';
import { ListContext, ListDataContext } from '../common/list-context';
import { Task, CompletedTask } from '../components/ListComponents';
import moment from 'moment';

export function ListScreen( { route, navigation }) {

  const {theme, setTheme, saveTheme} = useContext(ThemeContext);
  const {listData, setListData, saveListData} = useContext(ListDataContext);
  const updatedListData = [...listData];
  const {currentList, setCurrentList, saveCurrentList} = useContext(ListContext);
  const [taskInputText, setTaskInputText] = useState('');
  const [expandCompleted, setExpandCompleted] = useState(false);
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

  return (
    <KeyboardAvoidingView 
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      behavior='padding'
      keyboardVerticalOffset={155} //update this to a dynamically calculated value based on screen dimension
      style={[styles.container, { backgroundColor: theme.background}]}
    >
      <ScrollView contentContainerStyle={listData[currentList.listIndex].tasks.length == 0 ? {height: '100%', alignContent: 'center', justifyContent:'center'} : null}>
        {console.log("listscreen route.params.listID: " + route.params.listID)}
        {listData[currentList.listIndex].tasks.length == 0 ? <Text style={[styles.emptyTasksText, {color: theme.disabledText}]}>No Tasks Yet</Text> : 
          listData[currentList.listIndex].tasks.map((element, index) => (
            <Task
              key={element.taskID}
              id={element.taskID}
              taskName={element.taskName}
              detailsOnPress = {() => {
                navigation.navigate('Details', {taskObj: element, hasChanged: false});
              }}
            ></Task>
          ))
        }
      </ScrollView>

      <View style={[styles.inputSection, {borderColor: theme.disabledText,}]}>
          <TextInput
              placeholder='Enter task name'
              placeholderTextColor={theme.disabledText}
              style={[styles.inputText, {backgroundColor: theme.cardBackground, color:theme.primaryText}]}
              onChangeText={(text) => {
                  // taskNameRef.current = text;
                  setTaskInputText(text);
              }}
              defaultValue={taskInputText}
          />
          <TouchableOpacity 
            style={[styles.addButton, taskInputText == '' ? {backgroundColor:theme.buttonNeutral} : {backgroundColor:theme.buttonColorful}]}
            onPress={() => {
              if (taskInputText != '') {
                const newTaskID = "task_" + new Date().getTime();
                const newTaskName = taskInputText;
                const dateAdded = moment().format('YYYY-MM-DDTHH:mm:ss');
                const newTaskObj = {"taskID": newTaskID, 
                                    "taskName": newTaskName,
                                    "dateAdded": dateAdded,
                                    "notes": ''};
                console.log(newTaskObj);
                updatedListData[currentList.listIndex].tasks.push(newTaskObj);
                setListData(updatedListData);
                saveListData(updatedListData);
                Keyboard.dismiss();
                setTaskInputText('');
              }
            }}
          >
              <Text style={taskInputText == '' ? {color:theme.secondaryText} : {color:theme.buttonColorfulText}}>add</Text>
          </TouchableOpacity>
      </View>

      <View style={[styles.completedSection]}>
        <TouchableOpacity 
            style={[styles.completedHeader, {backgroundColor: theme.cardBackground}]}
            onPress={() => {
              if (listData[currentList.listIndex].completed.length > 0)
              {
                setExpandCompleted(!expandCompleted);
                LayoutAnimation.configureNext(layoutAnimConfig);
              }
            }}
        >
            <Text style={[styles.completedHeaderText, listData[currentList.listIndex].completed.length == 0 ? {color:theme.disabledText} : {color:theme.buttonColorful}]}
            >
              {"Completed (" + listData[currentList.listIndex].completed.length + ")"}
            </Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={expandCompleted ? {height: '100%', alignContent: 'center'} : {height: '0%'}}>
          {
            listData[currentList.listIndex].completed.map((element, index) => (
              <CompletedTask
                key={element.taskID}
                id={element.taskID}
                taskName={element.taskName}
              ></CompletedTask>
            ))
          }
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

/** STYLES */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputSection: {
      width: '100%',
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      // borderTopWidth: 1,
    },
    inputText: {
      width: '80%',
      height: '100%',
      fontSize: 16,
      textAlign: 'left',
      paddingLeft: 10,
    },
    addButton: {
      width: '20%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    },
    emptyTasksText: {
      fontSize: 18,
      textAlign: 'center',
    },
    completedSection: {
      width: '100%',
      alignItems: 'center',
    },
    completedHeader: {
      width: '100%',
      height: 30,
      justifyContent: 'center'
    },
    completedHeaderText: {
      fontSize: 16,
      paddingLeft: 10
    },
  
});