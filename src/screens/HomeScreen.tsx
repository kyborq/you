import {Header} from '@components/Header';
import {COLORS} from '@constants/colors';
import {StyleSheet, Text, View} from 'react-native';

export const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.root}>
      <Header title="Главная" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.cardColor,
    padding: 24,
    borderBottomStartRadius: 24,
    borderBottomEndRadius: 24,
  },
});
