import { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatsScreen } from '../screens/StatsScreen';
import { RewardsScreen } from '../screens/RewardsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ListsDrawer } from './ListsDrawer';
import { ThemeContext } from '../common/theme-context';
import { SettingsContext } from '../common/settings-context';
import Icon from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export function BottomTabs() {

  const {theme, setTheme, saveTheme} = useContext(ThemeContext);
  const {settingsData, setSettingsData, saveSettingsData} = useContext(SettingsContext);

  return(
    <Tab.Navigator
      screenOptions={{tabBarStyle: {backgroundColor: theme.background},
                      tabBarActiveTintColor: theme.buttonColorful, 
                      headerStyle: {backgroundColor: theme.background}, 
                      headerTintColor: theme.primaryText,}}
    >
      <Tab.Screen
        name="Lists" 
        component={ListsDrawer}
        options={{headerShown: false,
                  tabBarIcon: (props) => {
                    const {focused, color, size} = props;
                    return (
                      <Icon name="list" size={size} color={color} />
                    );
                  }}} 
      />

      <Tab.Screen 
        name="Stats" 
        component={StatsScreen}
        options={{
          tabBarIcon: (props) => {
            const {focused, color, size} = props;
            return (
              <Icon name="chart-bar" size={size} color={color} />
            );
          }}}  
      />

      {settingsData.distractionFree == false ?
        <Tab.Screen 
          name="Rewards" 
          component={RewardsScreen}
          options={{
            tabBarIcon: (props) => {
              const {focused, color, size} = props;
              return (
                <Icon name="award" size={size} color={color} />
              );
            }}}   
        /> : null}

      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarIcon: (props) => {
            const {focused, color, size} = props;
            return (
              <Icon name="cog" size={size} color={color} />
            );
          }}}    
      />
    </Tab.Navigator>
  );
}