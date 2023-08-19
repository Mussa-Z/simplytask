import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../common/theme-context';

export function HowToScreen( { navigation }) {

    const {theme, setTheme, saveTheme} = useContext(ThemeContext);

    return (
      <ScrollView style={{flex: 1, backgroundColor:theme.background}} contentContainerStyle={{alignItems: 'center'}}>

        {/** HOW TO ADD A LIST */}
        <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: theme.secondaryText}]}> 
                <Text>{`\u25CF `}</Text>
                <Text>How to add a list</Text>
            </Text>
            <Text style={[styles.paragraph, {color:theme.primaryText}]}>
                To add a new list, tap the '+' in the header on the lists tab. Type a name and tap 'Create' in the header.
            </Text>
            <Image
                source={require('../assets/images/how-tos/adding-a-list-01.jpg')}
                style={[styles.img, {borderColor: theme.borderColour,}]}
            />
            <Image
                source={require('../assets/images/how-tos/adding-a-list-02.jpg')}
                style={[styles.img, {borderColor: theme.borderColour,}]}
            />
        </View>

        {/** HOW TO DELETE A LIST */}
        <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: theme.secondaryText}]}> 
                <Text>{`\u25CF `}</Text>
                <Text>How to delete a list</Text>
            </Text>
            <Text style={[styles.paragraph, {color:theme.primaryText}]}>
                To delete a list, open the list drawer and tap 'delete selected list' at the bottom of the drawer menu.
            </Text>
            <Image
                source={require('../assets/images/how-tos/deleting-a-list.jpg')}
                style={[styles.img, {borderColor: theme.borderColour,}]}
            />
        </View>

        {/** HOW TO ADD A TASK */}
        <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: theme.secondaryText}]}> 
                <Text>{`\u25CF `}</Text>
                <Text>How to add a task</Text>
            </Text>
            <Text style={[styles.paragraph, {color:theme.primaryText}]}>
                To add a task, tap inside the text box at the bottom of the 'lists' screen. Type a brief description of the task and tap 'Add'.
            </Text>
            <Image
                source={require('../assets/images/how-tos/adding-a-task.jpg')}
                style={[styles.img, {borderColor: theme.borderColour,}]}
            />
        </View>

        {/** HOW TO COMPLETE A TASK */}
        <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: theme.secondaryText}]}> 
                <Text>{`\u25CF `}</Text>
                <Text>How to complete a task</Text>
            </Text>
            <Text style={[styles.paragraph, {color:theme.primaryText}]}>
                To complete a task, tap the blank dotted circle to the left of the task name.
            </Text>
            <Image
                source={require('../assets/images/how-tos/completing-a-task.jpg')}
                style={[styles.img, {height: 300, borderColor: theme.borderColour,}]}
            />
        </View>

        {/** HOW TO VIEW COMPLETED TASKS */}
        <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: theme.secondaryText}]}> 
                <Text>{`\u25CF `}</Text>
                <Text>How to view completed tasks</Text>
            </Text>
            <Text style={[styles.paragraph, {color:theme.primaryText}]}>
                To view tasks you have already completed, tap the completed header at the bottom of the list page.
            </Text>
            <Image
                source={require('../assets/images/how-tos/view-completed-tasks.jpg')}
                style={[styles.img, {borderColor: theme.borderColour,}]}
            />
        </View>
        
      </ScrollView>
    );

}
  
const styles = StyleSheet.create({
    section: {
        flexDirection: 'column',
        width: '92%',
        marginTop: 20,
        marginLeft: '4%',
        marginRight: '4%',
    },
    sectionHeader: {
        flexDirection: 'row',
        width: '100%',
        fontSize: 24,
    },
    paragraph: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '96%',
        fontSize: 16,
        marginLeft: '7%',
        marginTop: 10
    },
    img: {
        width: 200,
        height: 400,
        resizeMode: 'cover',
        marginLeft: '7%',
        marginTop: 10,
        borderWidth: 1
    },
});