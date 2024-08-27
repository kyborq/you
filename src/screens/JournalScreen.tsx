import {Header} from '@components/Header';
import {ScrollableScreenWrapper} from '@components/ScrollableScreenWrapper';
import {TabNavigatorParamList} from '@components/TabNavigation';
import {Week} from '@components/Week';
import {COLORS} from '@constants/colors';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppStore} from 'src/store/useAppStore';

type JournalScreenProps = BottomTabScreenProps<
  TabNavigatorParamList,
  'Journal'
>;

export const JournalScreen = ({navigation}: JournalScreenProps) => {
  const headerComponent = <Header title="Журнал"></Header>;

  return (
    <SafeAreaView>
      <ScrollableScreenWrapper headerComponent={headerComponent}>
        <Text>JournalScreen</Text>
      </ScrollableScreenWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardColor,
    height: 64,
    borderRadius: 24,
  },
});
