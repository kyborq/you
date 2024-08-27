import {Navigation} from '@components/Navigation';
import {COLORS} from '@constants/colors';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {useInterval} from 'usehooks-ts';
import {useAppStore} from './store/useAppStore';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const {updateCurrentDate} = useAppStore();

  useInterval(() => {
    updateCurrentDate();
  }, 1000);

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: COLORS.backgroundColor,
        },
      }}>
      <GestureHandlerRootView>
        <StatusBar backgroundColor={COLORS.contentColor} />
        <Navigation />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
