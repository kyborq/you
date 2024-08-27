import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
} from 'react-native-reanimated';
import {SvgProps} from 'react-native-svg';

type Props = {
  label: string;
  icon?: React.FC<SvgProps>;
  primary?: boolean;
  fill?: boolean;
  onPress?: () => void;
};

export const Button = ({icon: Icon, label, primary, fill, onPress}: Props) => {
  const scale = useSharedValue(1);
  const pressed = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      pressed.value,
      [0, 1],
      [primary ? '#000000' : '#f2f2f2', primary ? '#333333' : '#d9d9d9'],
    );

    return {
      transform: [{scale: scale.value}],
      backgroundColor,
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.98, {damping: 10, stiffness: 250});
    pressed.value = withSpring(1);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, {damping: 10, stiffness: 250});
    pressed.value = withSpring(0);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      style={fill && {flex: fill && 1}}>
      <Animated.View
        style={[
          styles.button,
          primary && styles.primary,
          animatedStyle,
          fill && {height: 50},
        ]}>
        {Icon && <Icon color={primary ? '#ffffff' : '#c7c7c7'} />}
        <Text style={[primary && styles.label, fill && {fontSize: 14}]}>
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    flexDirection: 'row',
    gap: 8,
    borderRadius: 20,
  },
  primary: {
    backgroundColor: '#000000',
  },
  label: {
    color: '#ffffff',
  },
});
