import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigation} from './TabNavigation';
import {COLORS} from '@constants/colors';

export type RootStackParamList = {
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tabs" component={TabNavigation} />
    </Stack.Navigator>
  );
};
