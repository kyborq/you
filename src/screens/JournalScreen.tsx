import {Header} from '@components/Header';
import {TabNavigatorParamList} from '@components/TabNavigation';
import {Week} from '@components/Week';
import {COLORS} from '@constants/colors';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import {useAppStore} from 'src/store/useAppStore';

type JournalScreenProps = BottomTabScreenProps<
  TabNavigatorParamList,
  'Journal'
>;

export const JournalScreen = ({navigation}: JournalScreenProps) => {
  const {currentDate} = useAppStore();

  return (
    <View style={styles.root}>
      <Header title="Журнал" />
      <Week date={currentDate} />
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
    gap: 24,
  },
});
