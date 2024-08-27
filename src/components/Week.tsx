import {ScrollView, StyleSheet, View} from 'react-native';
import {generateWeek} from 'src/utils/calendar';
import {WeekDay} from './WeekDay';
import {COLORS} from '@constants/colors';

type Props = {
  date: Date;
};

export const Week = ({date}: Props) => {
  const week = generateWeek(date);

  return (
    <View style={styles.week}>
      {week.map((day, index) => (
        <WeekDay
          key={index}
          date={day}
          current={day.toDateString() === date.toDateString()}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  week: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardColor,
    borderRadius: 24,
    padding: 4,
  },
});
