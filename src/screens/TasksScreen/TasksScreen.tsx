import React from 'react';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@components/Navigation';
import {TabNavigatorParamList} from '@components/TabNavigation';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {PlusIcon} from '@assets/icons';
import {Header} from '@components/Header';
import {IconButton} from '@components/IconButton';
import {Week} from '@components/Week';
import {COLORS} from '@constants/colors';
import {ScrollableScreenWrapper} from '@components/ScrollableScreenWrapper';

type TasksScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabNavigatorParamList, 'Tasks'>,
  NativeStackScreenProps<RootStackParamList>
>;

export const TasksScreen = ({navigation}: TasksScreenProps) => {
  const headerComponent = (
    <Header title="Задачи">
      <IconButton
        icon={<PlusIcon color={COLORS.primaryColor} />}
        onPress={() => {
          navigation.navigate('CreateTask');
        }}
      />
    </Header>
  );

  return (
    <SafeAreaView>
      <ScrollableScreenWrapper headerComponent={headerComponent}>
        <Week date={new Date()} />
        {[...Array(24)].map((_, index) => (
          <View key={index} style={styles.card} />
        ))}
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
