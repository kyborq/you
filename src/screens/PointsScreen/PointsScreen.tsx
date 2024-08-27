import {HomeIcon, PlusIcon} from '@assets/icons';
import {Button} from '@components/Button';
import {Header} from '@components/Header';
import {IconButton} from '@components/IconButton';
import {ScrollableScreenWrapper} from '@components/ScrollableScreenWrapper';
import {TabNavigatorParamList} from '@components/TabNavigation';
import {COLORS} from '@constants/colors';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type PointsScreenProps = BottomTabScreenProps<TabNavigatorParamList, 'Points'>;

export const PointsScreen = ({navigation}: PointsScreenProps) => {
  const headerComponent = <Header title="Отметки"></Header>;

  return (
    <SafeAreaView>
      <ScrollableScreenWrapper headerComponent={headerComponent}>
        <Text>PointsScreen</Text>
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
