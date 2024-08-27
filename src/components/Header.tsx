import {StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Header = ({title, children}: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
