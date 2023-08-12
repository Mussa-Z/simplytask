import { StyleSheet, View, ScrollView, TextInput, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../common/theme-context';
import { ListDataContext } from '../common/list-context';
import { Task } from '../components/ListComponents';

export function ListScreen( { route, navigation }) {

  const {theme, setTheme} = useContext(ThemeContext);
  const {listData, setListData} = useContext(ListDataContext);
  const updatedListData = {...listData};
  const taskNameRef = useRef('');

  const tasksArray = () => {
    for (var i = updatedListData.lists.length - 1; i >= 0; i--) {
      if (updatedListData.lists[i].listID = route.params.listID) {
        return updatedListData.lists[i].tasks;
      }
      return [];
    }
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={155} //update this to a dynamically calculated value based on screen dimension
      style={[styles.container, { backgroundColor: theme.background}]}
    >
      {/* <View style={[styles.container, { backgroundColor: theme.background}]}> */}
        <ScrollView>
          {/* {tasksArray.length == 0 ? (<Text>No Tasks Yet</Text>) : 
            tasksArray.map((element, index) => (
              <Task
                id={element.taskID}
                taskName={element.taskName}
                detailsOnPress = {() => {
                  navigation.navigate('Details');
                }}
              ></Task>
            ))
          } */}

            {updatedListData.lists[0].tasks.map((element, index) => (
              <Task
                key={element.taskID}
                id={element.taskID}
                taskName={element.taskName}
                detailsOnPress = {() => {
                  navigation.navigate('Details');
                }}
              ></Task>
            ))}

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
                    taskNameRef.current = text;
                }}
            />
            <TouchableOpacity 
              style={[styles.addButton, {backgroundColor: theme.buttonColorful}]}
              onPress={() => {
                alert('add task button pressed');
              }}
            >
                <Text style={{color:theme.buttonColorfulText}}>add</Text>
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
    }
});