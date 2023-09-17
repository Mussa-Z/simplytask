import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../common/theme-context';
import { SettingsContext } from "../common/settings-context";
import { Avatar } from '../components/RewardsComponents';

export function RewardsScreen( { navigation }) {

    const {theme, setTheme, saveTheme} = useContext(ThemeContext);
    const {settingsData, setSettingsData, saveSettingsData} = useContext(SettingsContext);
    const numOfUnlockedItems = () => {
      let arr = settingsData.avatars.filter(function(item) {
        return item.status == 'unlocked'
      });
      return arr.length;
    } 

    return (
      <View style={[styles.container, {backgroundColor:theme.background}]}>
        <View style={styles.rewardsProgress}>
          <Text style={{color:theme.secondaryText}}>Rewards unlocked:</Text>
          <View style={[styles.rewardsProgressBarContainer, {borderColor:theme.borderColour}]}>
            
            <View style={[styles.rewardsProgressBar, 
              {backgroundColor: theme.buttonColorful, 
              width: (numOfUnlockedItems()/settingsData.avatars.length)*98, 
              height: 29,}]}>

            </View>
            <Text style={{color:theme.primaryText, paddingLeft: 5}}>
              {numOfUnlockedItems() + ' / ' + settingsData.avatars.length} 
            </Text>
          </View>
        </View>
        
        <FlatList 
          data={settingsData.avatars}
          renderItem={
            ({item}) => <Avatar 
              image={item.uri}
              size={64}
              status={item.status}
              cost={item.cost}
              index={item.index}
            />
          }
          keyExtractor={item => item.id}
          numColumns={3}   
          style={styles.avatarList}
        />
      </View>
    );
} 

/** STYLES */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rewardsProgress: {
      flexDirection: 'row',
      margin: '4%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rewardsProgressBarContainer: {
      width: 100,
      height: 30,
      marginLeft: 10,
      borderColor: 'white',
      borderWidth: 1,
      justifyContent: 'center',
    },
    rewardsProgressBar: {
      position: 'absolute',
    },
    avatarList: {
      width: '100%'
    }
});