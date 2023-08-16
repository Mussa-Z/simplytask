import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../common/theme-context';
import { SettingsContext } from "../common/settings-context";
import { Avatar } from '../components/RewardsComponents';

export function RewardsScreen( { navigation }) {

    const {theme, setTheme} = useContext(ThemeContext);
    const {settingsData, setSettingsData, saveSettingsData} = useContext(SettingsContext);

    return (
      <View style={[styles.container, {backgroundColor:theme.background}]}>
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
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarList: {
      width: '100%'
    }
});