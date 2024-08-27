import {HomeIcon, PlusIcon} from '@assets/icons';
import {Button} from '@components/Button';
import {Header} from '@components/Header';
import {IconButton} from '@components/IconButton';
import {RootStackParamList} from '@components/Navigation';
import {TabNavigatorParamList} from '@components/TabNavigation';
import {Week} from '@components/Week';
import {COLORS} from '@constants/colors';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {useAppStore} from 'src/store/useAppStore';

type TasksScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabNavigatorParamList, 'Tasks'>,
  NativeStackScreenProps<RootStackParamList>
>;

export const TasksScreen = ({navigation}: TasksScreenProps) => {
  const {currentDate} = useAppStore();

  return (
    <View style={styles.root}>
      <Header title="Задачи">
        <IconButton
          icon={<PlusIcon color={COLORS.primaryColor} />}
          onPress={() => {
            navigation.navigate('CreateTask');
          }}
        />
      </Header>
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
