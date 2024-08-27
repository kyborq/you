import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from './TabBar';
import {BookIcon, CheckIcon, ChecklistIcon, HomeIcon} from '@assets/icons';
import {HomeScreen} from '@screens/HomeScreen';
import {PointsScreen} from '@screens/PointsScreen';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: HomeIcon, tabBarLabel: 'Главная'}}
      />
      <Tab.Screen
        name="Tasks"
        component={HomeScreen}
        options={{tabBarIcon: CheckIcon, tabBarLabel: 'Задачи'}}
      />
      <Tab.Screen
        name="Journal"
        component={HomeScreen}
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
