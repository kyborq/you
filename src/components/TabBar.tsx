import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {TabButton} from './TabButton';
import {COLORS} from '@constants/colors';
import {useAppStore} from 'src/store/useAppStore';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useEffect} from 'react';

export const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {tabBarHidden} = useAppStore();

  const height = useSharedValue(tabBarHidden ? 0 : 80);
  const opacity = useSharedValue(tabBarHidden ? 0 : 1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(height.value, {
        damping: 15,
        stiffness: 150,
      }),
      opacity: withSpring(opacity.value),
      overflow: 'hidden',
    };
  }, [tabBarHidden]);

  useEffect(() => {
    height.value = tabBarHidden ? 0 : 80;
    opacity.value = tabBarHidden ? 0 : 1;
  }, [tabBarHidden]);

  return (
    <Animated.View style={[styles.tabs, animatedStyle]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;
        const color = isFocused ? COLORS.primaryColor : '#55534E';

        const icon =
          options.tabBarIcon &&
          options.tabBarIcon({color, focused: true, size: 0});

        const label = options.tabBarLabel && options.tabBarLabel.toString();

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Animated.View
            key={route.key}
            style={[
              {
                marginVertical: -40,
                overflow: 'visible',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <TabButton
              onPress={onPress}
              color={color}
              icon={icon}
              label={label!}
              height={height.value}
            />
          </Animated.View>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
    position: 'relative',
  },
});
