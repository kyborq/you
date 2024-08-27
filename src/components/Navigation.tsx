import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigation} from './TabNavigation';
import {COLORS} from '@constants/colors';
import {OnboardingScreen} from '@screens/OnboardingScreen';
import {CreateTaskScreen} from '@screens/TasksScreen/CreateTaskScreen';

export type RootStackParamList = {
  Tabs: undefined;
  Onboarding: undefined;

  CreateTask: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />

      <Stack.Group>
        <Stack.Screen name="Tabs" component={TabNavigation} />
        <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
