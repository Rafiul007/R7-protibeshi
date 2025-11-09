/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StyleSheet, Platform, View} from 'react-native';
import {Text, Badge, TouchableRipple, useTheme, Icon} from 'react-native-paper';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

interface MenuTileItemProps {
  label: string;
  icon: string;
  onPress?: () => void;
  index: number;
  width: number;
  notificationCount?: number;
}

const AnimatedCard = Animated.createAnimatedComponent(View);

export const MenuTileItem: React.FC<MenuTileItemProps> = ({
  label,
  icon,
  onPress,
  index,
  width,
  notificationCount = 0,
}) => {
  const {colors} = useTheme();

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    const delay = index * 150;
    const timeout = setTimeout(() => {
      opacity.value = withTiming(1, {
        duration: 700,
        easing: Easing.out(Easing.exp),
      });
      translateY.value = withTiming(0, {
        duration: 700,
        easing: Easing.out(Easing.exp),
      });
    }, delay);
    return () => clearTimeout(timeout);
  }, [index, opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{translateY: translateY.value}],
  }));

  return (
    <View
      style={{
        width,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surface,
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: colors.primary,
      }}>
      <TouchableRipple
        onPress={onPress}
        rippleColor={colors.primary + '20'}
        style={{flex: 1, width: '100%', alignItems: 'center'}}>
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            paddingVertical: 8,
          }}>
          <AnimatedCard
            style={[
              styles.iconBox,
              animatedStyle,
              Platform.select({
                ios: {
                  shadowOpacity: 0.15,
                  shadowOffset: {width: 0, height: 4},
                  shadowRadius: 6,
                },
                android: {elevation: 0},
              }),
            ]}>
            <Icon source={icon} size={34} color={colors.primary} />
            {notificationCount > 0 && (
              <Badge style={styles.badge}>{notificationCount}</Badge>
            )}
          </AnimatedCard>

          <Text
            style={[styles.label, {color: colors.onSurface}]}
            numberOfLines={1}>
            {label}
          </Text>
        </View>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBox: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  label: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  badge: {
    position: 'absolute',
    top: -3,
    right: -6,
    backgroundColor: '#b71c1c',
  },
});

export default MenuTileItem;
