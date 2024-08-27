import {Header} from '@components/Header';
import {TabNavigatorParamList} from '@components/TabNavigation';
import {COLORS} from '@constants/colors';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';

type HomeScreenProps = BottomTabScreenProps<TabNavigatorParamList, 'Home'>;

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View style={styles.root}>
      <Header title="Главная" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.contentColor,
    padding: 24,
    borderBottomStartRadius: 24,
    borderBottomEndRadius: 24,
  },
});
