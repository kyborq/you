import {Logo} from '@assets/icons';
import {Button} from '@components/Button';
import {Header} from '@components/Header';
import {COLORS} from '@constants/colors';
import {StyleSheet, Text, View} from 'react-native';

export const OnboardingScreen = ({navigation}: any) => {
  return (
    <View style={styles.root}>
      <View
        style={{
          gap: 12,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Logo />
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
            color: COLORS.primaryColor,
          }}>
          YOU
        </Text>
      </View>
      <Button
        label="Let's Go!"
        size="big"
        primary
        onPress={() => navigation.navigate('Tabs')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.contentColor,
    padding: 24,
  },
});
