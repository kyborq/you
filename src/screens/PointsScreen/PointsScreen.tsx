import {HomeIcon, PlusIcon} from '@assets/icons';
import {Button} from '@components/Button';
import {Header} from '@components/Header';
import {IconButton} from '@components/IconButton';
import {COLORS} from '@constants/colors';
import {StyleSheet, Text, View} from 'react-native';

export const PointsScreen = ({navigation}: any) => {
  return (
    <View style={styles.root}>
      <Header title="Отметки">
        <IconButton icon={<PlusIcon color={COLORS.primaryColor} />} />
      </Header>
      <View style={{flex: 1}}>
        <View
          style={{
            width: '50%',
            minHeight: 120,
            backgroundColor: COLORS.cardColor,
            borderRadius: 18,
            padding: 12,
          }}>
          <View
            style={{flexWrap: 'wrap', flex: 1, gap: 2, flexDirection: 'row'}}>
            {new Array(31).fill(0).map((_, index) => (
              <View
                key={index}
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 6,
                  backgroundColor: COLORS.contentColor,
                }}
              />
            ))}
          </View>
          {/* <Button label="Hehe" primary /> */}
        </View>
      </View>
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
