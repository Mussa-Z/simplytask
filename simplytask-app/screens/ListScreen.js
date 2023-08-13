import { StyleSheet, View, ScrollView, TextInput, Text, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../common/theme-context';
import { ListContext, ListDataContext } from '../common/list-context';
import { Task } from '../components/ListComponents';

export function ListScreen( { route, navigation }) {

  const {theme, setTheme} = useContext(ThemeContext);
  const {listData, setListData} = useContext(ListDataContext);
  const updatedListData = [...listData];
  const {currentList, setCurrentList} = useContext(ListContext);
  // const taskNameRef = useRef('');
  const [taskInputText, setTaskInputText] = useState('');

  // const tasksArray = () => {
  //   for (var i = listData.length - 1; i >= 0; i--) {
  //     if (listData[i].listID == route.params.listID) {
  //       return listData[i].tasks;
  //     }
  //     return [];
  //   }
  // }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={155} //update this to a dynamically calculated value based on screen dimension
      style={[styles.container, { backgroundColor: theme.background}]}
    >
      {/* <View style={[styles.container, { backgroundColor: theme.background}]}> */}
        <ScrollView contentContainerStyle={listData[currentList.listIndex].tasks.length == 0 ? {height: '100%', alignContent: 'center', justifyContent:'center'} : null}>
          {console.log("listscreen route.params.listID: " + route.params.listID)}
          {listData[currentList.listIndex].tasks.length == 0 ? <Text style={[styles.emptyTasksText, {color: theme.disabledText}]}>No Tasks Yet</Text> : 
            listData[currentList.listIndex].tasks.map((element, index) => (
              <Task
                key={element.taskID}
                id={element.taskID}
                taskName={element.taskName}
                detailsOnPress = {() => {
                  navigation.navigate('Details');
                }}
              ></Task>
            ))
          }

            {/* {updatedListData.lists[0].tasks.map((element, index) => (
              <Task
                key={element.taskID}
                id={element.taskID}
                taskName={element.taskName}
                detailsOnPress = {() => {
                  navigation.navigate('Details');
                }}
              ></Task>
            ))} */}

          {/* <Task
            taskName="Research dark and light theme colours"
          ></Task>
          <Task
            taskName="Implement Task cards"
          ></Task>
          <Task
            taskName="This is a really really long long long task name"
          ></Task>     */}
          {/* <Text>{listName}</Text>
          <Button 
            title="View details"
            onPress={() => navigation.navigate('Details')}
          /> */}
        </ScrollView>
        <View style={styles.inputSection}>
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
              style={[styles.addButton, {backgroundColor: theme.buttonColorful}]}
              onPress={() => {
                if (taskInputText != '') {
                  const newTaskID = "task_" + new Date().getTime();
                  const newTaskName = taskInputText;
                  const dateAdded = new Date();
                  const newTaskObj = {"taskID": newTaskID, 
                                      "taskName": newTaskName,
                                      "dateAdded": dateAdded,
                                      "Notes": ''};
                  console.log(newTaskObj);
                  updatedListData[currentList.listIndex].tasks.push(newTaskObj);
                  setListData(updatedListData);
                  Keyboard.dismiss();
                  setTaskInputText('');
                }
              }}
            >
                <Text style={taskInputText == '' ? {color:theme.disabledText} : {color:theme.buttonColorfulText}}>add</Text>
            </TouchableOpacity>
        </View>
      {/* </View> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // marginLeft: '4%',
        // marginRight: '4%'
    },
    inputSection: {
      width: '100%',
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputText: {
      width: '80%',
      // borderBottomWidth: 1,
      // borderColor: "#3fa3bd",
      height: '100%',
      fontSize: 16,
      textAlign: 'left',
      paddingLeft: 10,
      // borderRadius: 25
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
    }
});