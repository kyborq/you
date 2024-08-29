import {CheckIcon} from '@assets/icons';
import {Button} from '@components/Button';
import {Field} from '@components/Field';
import {Header} from '@components/Header';
import {RootStackParamList} from '@components/Navigation';
import {COLORS} from '@constants/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {useAppStore} from 'src/store/useAppStore';
import {TTask, useTaskStore} from 'src/store/useTaskStore';
import {uuid4} from 'src/utils/uuid';

type TaskCreateScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateTask'
>;

export const CreateTaskScreen = ({navigation}: TaskCreateScreenProps) => {
  const {currentDate} = useAppStore();
  const {createTask} = useTaskStore();

  const {control, handleSubmit} = useForm({
    defaultValues: {
      id: uuid4(),
      createdDate: currentDate,
      title: '',
    },
  });

  const onSubmit = (data: TTask) => {
    createTask(data);
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <Header title="Создать задачу" onBack={navigation.goBack} />
      <View style={{flex: 1, gap: 8}}>
        <Controller
          control={control}
          name="title"
          render={({field}) => (
            <Field
              icon={CheckIcon}
              placeholder="Название"
              maxLength={28}
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
      </View>
      <Button
        label="Сохранить"
        size="big"
        primary
        onPress={handleSubmit(onSubmit)}
      />
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
