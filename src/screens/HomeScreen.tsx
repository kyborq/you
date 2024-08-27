import {PlusIcon} from '@assets/icons';
import {Button} from '@components/Button';
import {Header} from '@components/Header';
import {IconButton} from '@components/IconButton';
import {ScrollableScreenWrapper} from '@components/ScrollableScreenWrapper';
import {TabNavigatorParamList} from '@components/TabNavigation';
import {COLORS} from '@constants/colors';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useKeepAwake} from 'expo-keep-awake';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useAppStore} from 'src/store/useAppStore';

type HomeScreenProps = BottomTabScreenProps<TabNavigatorParamList, 'Home'>;

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const headerComponent = <Header title="Фокус"></Header>;

  return (
    <SafeAreaView>
      <ScrollableScreenWrapper headerComponent={headerComponent}>
        <Text>Home</Text>
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
