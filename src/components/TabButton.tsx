import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  icon: React.ReactNode;
  label: string;
  color: string;
  onPress?: () => void;
};

export const TabButton = ({icon, label, color, onPress}: Props) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.94, {damping: 10, stiffness: 250});
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, {damping: 10, stiffness: 250});
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}>
      <Animated.View style={[styles.tab, animatedStyle]}>
        {icon}
        <Text style={[{fontSize: 10, color}]}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tab: {
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
});
