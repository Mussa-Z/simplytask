import { StyleSheet, View, Text, KeyboardAvoidingView, Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useContext, useState } from 'react';
import { ThemeContext } from '../common/theme-context';
import moment from 'moment';

export function DetailsScreen( { route, navigation }) {

    const {theme, setTheme, saveTheme} = useContext(ThemeContext);
    const taskObj = {...route.params.taskObj};
    const [taskName, setTaskName] = useState(taskObj.taskName);
    const [note, setNote] = useState(taskObj.note);

    return(
        // <View style={[styles.container, {backgroundColor: theme.background}]}>
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={155} //update this to a dynamically calculated value based on screen dimension
            style={[styles.container, {backgroundColor: theme.background}]}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.container, {backgroundColor: theme.background}]}>
                    <View style={styles.taskNameSection}>
                        <Text style={[styles.label, {color:theme.disabledText}]}>Task Name </Text>
                        <TextInput
                            style={[styles.inputText, {backgroundColor: theme.cardBackground, color:theme.primaryText}]}
                            multiline={true}
                            numberOfLines={3}
                            onChangeText={(text) => {
                                setTaskName(text);
                                taskObj.taskName = text;
                                navigation.setParams({
                                    hasChanged: true,
                                    taskObj: taskObj
                                });
                            }}
                            defaultValue={taskName}
                        />
                    </View>
        
                    <View style={styles.dateAddedSection}>
                        <Text style={[styles.dateAddedText, {color:theme.disabledText}]}>{"Added " + moment(taskObj.dateAdded).fromNow()} </Text>
                    </View>

                    <View style={styles.noteSection}>
                        <Text style={[styles.label, {color:theme.disabledText}]}>Note </Text>
                        <TextInput
                            placeholder='add a note'
                            placeholderTextColor={theme.disabledText}
                            style={[styles.inputText, {backgroundColor: theme.cardBackground, color:theme.primaryText}]}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={(text) => {
                                setNote(text);
                                taskObj.note = text;
                                navigation.setParams({
                                    hasChanged: true,
                                    taskObj: taskObj
                                });
                            }}
                            defaultValue={note}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        // </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    taskNameSection: {
        width: '100%',
        height: 100,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '4%',
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    label: {
        fontSize: 14,
        textAlign: 'left'
    },
    inputText: {
        width: '100%',
        height: '80%',
        fontSize: 16,
        textAlign: 'left',
        textAlignVertical: 'top',
        paddingLeft: 10,
    },
    dateAddedSection: {
        width: '100%',
        height: 30,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '4%',
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    dateAddedText: {
        fontSize: 16,
        textAlign: 'left',
    },
    noteSection: {
        width: '100%',
        height: 120,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '4%',
        paddingLeft: '4%',
        paddingRight: '4%',
    },
});