import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from './TabBar';
import {BookIcon, CheckIcon, ChecklistIcon, ClockIcon} from '@assets/icons';
import {HomeScreen} from '@screens/HomeScreen';
import {PointsScreen} from '@screens/PointsScreen';
import {TasksScreen} from '@screens/TasksScreen';
import {JournalScreen} from '@screens/JournalScreen';
import {COLORS} from '@constants/colors';

export type TabNavigatorParamList = {
  Home: undefined;
  Tasks: undefined;
  Journal: undefined;
  Points: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
      sceneContainerStyle={{
        overflow: 'hidden',
        backgroundColor: COLORS.contentColor,
        borderBottomStartRadius: 24,
        borderBottomEndRadius: 24,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: ClockIcon, tabBarLabel: 'Фокус'}}
      />
      <Tab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{tabBarIcon: CheckIcon, tabBarLabel: 'Задачи'}}
      />
      <Tab.Screen
        name="Journal"
        component={JournalScreen}
        options={{tabBarIcon: BookIcon, tabBarLabel: 'Журнал'}}
      />
      <Tab.Screen
        name="Points"
        component={PointsScreen}
        options={{tabBarIcon: ChecklistIcon, tabBarLabel: 'Отметки'}}
      />
    </Tab.Navigator>
  );
};
