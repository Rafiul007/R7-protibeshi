import React, {useEffect} from 'react';
import {Text, StyleSheet, View, Pressable, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {useTheme} from 'react-native-paper';

interface MenuTileItemProps {
  label: string;
  icon: string;
  onPress?: () => void;
  index: number;
  width: number;
}

const AnimatedView = Animated.createAnimatedComponent(View);

const MenuTileItem: React.FC<MenuTileItemProps> = ({
  label,
  icon,
  onPress,
  index,
  width,
}) => {
  const {colors} = useTheme();
  const circleSize = 60;

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    const delay = index * 160;

    const timeout = setTimeout(() => {
      opacity.value = withTiming(1, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
      translateY.value = withTiming(0, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
    }, delay);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{translateY: translateY.value}],
  }));

  return (
    <Pressable onPress={onPress} style={[styles.wrapper, {width}]}>
      <AnimatedView
        style={[
          styles.tile,
          {
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize / 2,
            backgroundColor: colors.primaryContainer,
            borderColor: colors.outlineVariant,
            shadowColor: colors.shadow,
            ...Platform.select({
              ios: {
                shadowOpacity: 0.3,
                shadowOffset: {width: 0, height: 4},
                shadowRadius: 6,
              },
              android: {
                elevation: 6,
              },
            }),
          },
          animatedStyle,
        ]}>
        <Icon name={icon} size={28} color={colors.surface} />
      </AnimatedView>
      <Text style={[styles.label, {color: colors.onSurface}]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  label: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default MenuTileItem;
