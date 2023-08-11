import { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatsScreen } from '../screens/StatsScreen';
import { RewardsScreen } from '../screens/RewardsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ListsDrawer } from './ListsDrawer';
import { ThemeContext } from '../common/theme-context';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  const {theme, setTheme} = useContext(ThemeContext);
  return(
    <Tab.Navigator
      screenOptions={{tabBarStyle: {backgroundColor: theme.background}, headerStyle: {backgroundColor: theme.background}, headerTintColor: theme.primaryText,}}
    >
      <Tab.Screen 
        options={{headerShown: false}} 
        name="Lists" 
        component={ListsDrawer} 
      />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}