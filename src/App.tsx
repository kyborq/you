import {Navigation} from '@components/Navigation';
import {COLORS} from '@constants/colors';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: COLORS.backgroundColor,
        },
      }}>
      <StatusBar backgroundColor={COLORS.cardColor} />
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
