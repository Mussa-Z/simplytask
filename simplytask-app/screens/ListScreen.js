import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../common/theme-context';
import { Task } from '../components/ListComponents';



export function ListScreen( { route, navigation }) {
  const {theme, setTheme} = useContext(ThemeContext);
  const listName = route.params.listName;
  return (
    <View style={[styles.container, { backgroundColor: theme.background}]}>
      <ScrollView>
        <Task
          taskName="Research dark and light theme colours"
        ></Task>
        <Task
          taskName="Implement Task cards"
        ></Task>
        <Task
          taskName="This is a really really long long long task name"
        ></Task>    
        {/* <Text>{listName}</Text>
        <Button 
          title="View details"
          onPress={() => navigation.navigate('Details')}
        /> */}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // marginLeft: '4%',
        // marginRight: '4%'
    },
});