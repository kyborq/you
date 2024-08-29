import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollViewProps,
} from 'react-native';
import {useAppStore} from 'src/store/useAppStore';
import {COLORS} from '@constants/colors';

interface ScrollableScreenWrapperProps extends ScrollViewProps {
  headerComponent: React.ReactNode;
  children: React.ReactNode;
}

export const ScrollableScreenWrapper: React.FC<
  ScrollableScreenWrapperProps
> = ({headerComponent, children, contentContainerStyle, ...rest}) => {
  const {setTabBarVisible} = useAppStore();
  const scrollPosition = useRef(0);
  const scrollThreshold = 10;
  const scrollViewRef = useRef<ScrollView>(null);
  const [isScrollingToEnd, setIsScrollingToEnd] = useState(false);

  useEffect(() => {
    setTabBarVisible(false);
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event.nativeEvent.layoutMeasurement.height;
    const isAtTop = currentOffset <= 0;
    const isAtBottom =
      currentOffset + layoutHeight >= contentHeight - scrollThreshold;

    if (isAtTop) {
      setTabBarVisible(false);
    } else if (isAtBottom && !isScrollingToEnd) {
      setTabBarVisible(false);
      setIsScrollingToEnd(true);
      scrollViewRef.current?.scrollToEnd({animated: true});
    } else if (!isAtBottom && isScrollingToEnd) {
      setIsScrollingToEnd(false);
    } else {
      const direction = currentOffset > scrollPosition.current ? 'down' : 'up';

      if (
        direction === 'down' &&
        currentOffset - scrollPosition.current > scrollThreshold
      ) {
        setTabBarVisible(true);
      } else if (
        direction === 'up' &&
        scrollPosition.current - currentOffset > scrollThreshold
      ) {
        setTabBarVisible(false);
      }
    }

    scrollPosition.current = currentOffset;
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={[styles.root, contentContainerStyle]}
      onScroll={handleScroll}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      stickyHeaderIndices={[0]}
      {...rest}>
      <View style={styles.headerContainer}>{headerComponent}</View>
      <View style={styles.innerContainer}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 24,
    backgroundColor: COLORS.contentColor,
  },
  headerContainer: {
    backgroundColor: COLORS.contentColor,
    paddingTop: 16,
    paddingBottom: 20,
    justifyContent: 'center',
    borderBottomStartRadius: 24,
    borderBottomEndRadius: 24,
    paddingHorizontal: 24,
    marginHorizontal: -24,
  },
  innerContainer: {
    flexGrow: 1,
    gap: 8,
  },
});
