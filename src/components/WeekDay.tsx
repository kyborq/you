import {COLORS} from '@constants/colors';
import {StyleSheet, Text, View} from 'react-native';
import {formatDay} from 'src/utils/dates';

type Props = {
  date: Date;
  current?: boolean;
};

export const WeekDay = ({date, current}: Props) => {
  return (
    <View
      style={[
        styles.root,
        current && {backgroundColor: COLORS.cardLighterColor},
      ]}>
      <Text style={[styles.label, current && {color: COLORS.primaryColor}]}>
        {formatDay(date)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.whiteColor,
  },
});
