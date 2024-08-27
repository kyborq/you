import {CheckIcon, HomeIcon} from '@assets/icons';
import {Button} from '@components/Button';
import {Field} from '@components/Field';
import {Header} from '@components/Header';
import {RootStackParamList} from '@components/Navigation';
import {COLORS} from '@constants/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';

type TaskCreateScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateTask'
>;

export const CreateTaskScreen = ({navigation}: TaskCreateScreenProps) => {
  return (
    <View style={styles.root}>
      <Header title="Создать задачу" onBack={navigation.goBack} />
      <View style={{flex: 1, gap: 8}}>
        <Field icon={CheckIcon} placeholder="Название" />
      </View>
      <Button label="Сохранить" size="big" primary />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.contentColor,
    padding: 20,
    gap: 24,
  },
});
