import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../common/theme-context';
import { ListDataContext } from '../common/list-context';
import { BarChart } from 'react-native-chart-kit';
import { getDataForCurrentWeek } from '../utils/stat-utils';

export function StatsScreen( { navigation }) {

    const {theme, setTheme, saveTheme} = useContext(ThemeContext);
    const {listData, setListData, saveListData} = useContext(ListDataContext);
    const numOfTasksRef = useRef(0);
    const numofTasksCompletedRef = useRef(0);
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    const adjScreenWidth = screenWidth - (screenWidth * 0.08);
    const adjScreenHeight = screenHeight * 0.4;

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

    const chartConfig = {
      background: theme.background,
      backgroundGradientFrom: theme.background,
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: theme.background,
      backgroundGradientToOpacity: 1,
      color: (opacity = 1) => `rgba(152, 218, 182, ${opacity})`,
      strokeWidth: 1, // optional, default 3
      barPercentage: 0.5,
      decimalPlaces: 0,
      useShadowColorFromDataset: false // optional
    }

    const data = {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          data: getDataForCurrentWeek()
        }
      ]
    }

    return (
      <View style={[styles.container, {backgroundColor:theme.background}]}>

        <View style={styles.summarySection}>
          <View style={styles.summarySectionRow}>
            <View style={styles.summarySectionColumn}>
              <Text style={[styles.labelSmall, {color:theme.secondaryText}]}>Number of</Text>
              <Text style={[styles.labelBig, {color:theme.secondaryText}]}>Lists </Text>
              <Text style={[styles.summaryText, {color:theme.primaryText}]}> {listData.length} </Text>
            </View>
            <View style={styles.summarySectionColumn}>
              <Text style={[styles.labelSmall, {color:theme.secondaryText}]}>Number of</Text>
              <Text style={[styles.labelBig, {color:theme.secondaryText}]}>Tasks </Text>
              <Text style={[styles.summaryText, {color:theme.primaryText}]}> {getNumberOfTasks("open")} </Text>
            </View>
            <View style={styles.summarySectionColumn}>
              <Text style={[styles.labelSmall, {color:theme.secondaryText}]}>Number of </Text>
              <Text style={[styles.labelBig, {color:theme.secondaryText}]}>Completed Tasks </Text>
              <Text style={[styles.summaryText, {color:theme.primaryText}]}> {getNumberOfTasks("completed")} </Text>
            </View>
          </View>
        </View>

        <View style={styles.chartSection}>
          <Text style={[styles.labelBig, {color:theme.secondaryText}]}>Tasks Completed this Week </Text>
          <BarChart
            style={{marginVertical: 0, borderRadius: 0}}
            data={data}
            width={adjScreenWidth}
            height={adjScreenHeight}
            chartConfig={chartConfig}
            fromZero={true}
          />
        </View>
      </View>
    );

}
  
/** STYLES */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    summarySection: {
      // backgroundColor: 'blue',
      width: '100%',
      height: '32%',
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
      textAlign: 'left',
      marginBottom: '4%'
    },
    summaryText: {
        fontSize: 32,
        textAlign: 'left',
    },
    chartSection: {
      // backgroundColor: 'green',
      width: '100%',
      height: '56%',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingLeft: '4%',
      paddingRight: '4%',
    },
});