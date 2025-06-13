import React, {useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const MenuTileItem: React.FC<MenuTileItemProps> = ({
  label,
  icon,
  onPress,
  index,
  width,
}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    const delay = index * 160;

    const timeout = setTimeout(() => {
      opacity.value = withTiming(1, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });
      translateY.value = withTiming(0, {
        duration: 1000,
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
    <AnimatedTouchable
      style={[styles.tile, {width}, animatedStyle]}
      onPress={onPress}>
      <Icon name={icon} size={32} color="#444" />
      <Text style={styles.label}>{label}</Text>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  tile: {
    aspectRatio: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
  },
});

export default MenuTileItem;
