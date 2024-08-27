import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TabButton} from './TabButton';
import {COLORS} from '@constants/colors';

export const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.tabs}>
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
          <TabButton
            key={route.key}
            onPress={onPress}
            color={color}
            icon={icon}
            label={label!}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    height: 80,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
