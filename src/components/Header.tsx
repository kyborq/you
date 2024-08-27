import {StyleSheet, Text, View} from 'react-native';
import {IconButton} from './IconButton';
import {ArrowLeftIcon} from '@assets/icons';
import {COLORS} from '@constants/colors';

type Props = {
  title: string;
  children?: React.ReactNode;
  onBack?: () => void;
};

export const Header = ({title, children, onBack}: Props) => {
  return (
    <View style={styles.header}>
      {onBack && (
        <IconButton
          icon={<ArrowLeftIcon color={COLORS.primaryColor} onPress={onBack} />}
        />
      )}
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
