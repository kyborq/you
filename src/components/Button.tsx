import {COLORS} from '@constants/colors';
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
  size?: 'small' | 'big';
  onPress?: () => void;
};

export const Button = ({
  icon: Icon,
  label,
  primary,
  fill,
  size = 'small',
  onPress,
}: Props) => {
  const scale = useSharedValue(1);
  const pressed = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      pressed.value,
      [0, 1],
      [
        primary ? COLORS.primaryColor : COLORS.contentColor,
        primary ? COLORS.primaryDarkenColor : COLORS.backgroundColor,
      ],
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
          {height: size === 'big' ? 54 : 40},
          primary && styles.primary,
          animatedStyle,
          fill && {height: 50},
        ]}>
        {Icon && <Icon color={primary ? '#ffffff' : '#c7c7c7'} />}
        <Text
          style={[
            styles.label,
            {color: primary ? COLORS.cardColor : COLORS.primaryColor},
            fill && {fontSize: 14},
          ]}>
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
    height: 40,
    flexDirection: 'row',
    gap: 8,
    borderRadius: 24,
  },
  primary: {
    backgroundColor: '#000000',
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
