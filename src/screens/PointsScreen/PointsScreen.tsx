import {HomeIcon} from '@assets/icons';
import {Header} from '@components/Header';
import {IconButton} from '@components/IconButton';
import {COLORS} from '@constants/colors';
import {StyleSheet, Text, View} from 'react-native';

export const PointsScreen = ({navigation}: any) => {
  return (
    <View style={styles.root}>
      <Header title="Отметки">
        <IconButton icon={<HomeIcon color={'#ffffff'} />} />
      </Header>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.cardColor,
    padding: 24,
    borderBottomStartRadius: 24,
    borderBottomEndRadius: 24,
  },
});
