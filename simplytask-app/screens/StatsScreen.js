import { StyleSheet, View, Text } from 'react-native';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../common/theme-context';
import { ListDataContext } from '../common/list-context';

export function StatsScreen( { navigation }) {

    const {theme, setTheme} = useContext(ThemeContext);
    const {listData, setListData} = useContext(ListDataContext);
    const numOfTasksRef = useRef(0);
    const numofTasksCompletedRef = useRef(0);

    function getNumberOfTasks(taskType) {
      numOfTasksRef.current = 0;
      numofTasksCompletedRef.current = 0;
      for (var i = 0; i < listData.length; i++) {
        numOfTasksRef.current += listData[i].tasks.length;
        numofTasksCompletedRef.current += listData[i].completed.length;
      }
      if (taskType == "open") {
        return numOfTasksRef.current;
      } else {
        return numofTasksCompletedRef.current;
      }
    }

    return (
      <View style={[styles.container, {backgroundColor:theme.background}]}>

        <View style={styles.summarySection}>
          <View style={styles.summarySectionRow}>
            <View style={styles.summarySectionColumn}>
              <Text style={[styles.labelSmall, {color:theme.disabledText}]}>Number of</Text>
              <Text style={[styles.labelBig, {color:theme.disabledText}]}>Lists </Text>
              <Text style={[styles.summaryText, {color:theme.secondaryText}]}> {listData.length} </Text>
            </View>
            <View style={styles.summarySectionColumn}>
              <Text style={[styles.labelSmall, {color:theme.disabledText}]}>Number of</Text>
              <Text style={[styles.labelBig, {color:theme.disabledText}]}>Tasks </Text>
              <Text style={[styles.summaryText, {color:theme.secondaryText}]}> {getNumberOfTasks("open")} </Text>
            </View>
            <View style={styles.summarySectionColumn}>
              <Text style={[styles.labelSmall, {color:theme.disabledText}]}>Number of </Text>
              <Text style={[styles.labelBig, {color:theme.disabledText}]}>Completed Tasks </Text>
              <Text style={[styles.summaryText, {color:theme.secondaryText}]}> {getNumberOfTasks("completed")} </Text>
            </View>
          </View>
        </View>

        <View style={styles.chartSection}>
          
        </View>
      </View>
    );

}
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    summarySection: {
      // backgroundColor: 'blue',
      width: '100%',
      height: '40%',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: '4%',
      paddingLeft: '4%',
      paddingRight: '4%',
    },
    summarySectionRow: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    },
    summarySectionColumn: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingRight: '4%'

    },
    labelSmall: {
      fontSize: 10,
      textAlign: 'left'
    },
    labelBig: {
      fontSize: 20,
      textAlign: 'left'
    },
    summaryText: {
        fontSize: 32,
        textAlign: 'left',
    },
    chartSection: {
      // backgroundColor: 'green',
      width: '100%',
      height: '60%',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingLeft: '4%',
      paddingRight: '4%',
    },
});