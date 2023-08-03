import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatsScreen } from '../screens/StatsScreen';
import { RewardsScreen } from '../screens/RewardsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ListsDrawer } from './ListsDrawer'

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Lists" component={ListsDrawer} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}