/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import ServiceCard from '../Molucules/service-card';

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  screen?: string;
}

interface ServiceListProps {
  data: ServiceItem[];
  onItemPress?: (screen?: string) => void;
  scrollable?: boolean;
  showDivider?: boolean;
  containerStyle?: object;
}

// ✅ Sub-component to handle animation PER item
const AnimatedServiceItem: React.FC<{
  service: ServiceItem;
  index: number;
  showDivider?: boolean;
  onItemPress?: (screen?: string) => void;
}> = ({service, index, showDivider, onItemPress}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    const delay = index * 120;
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
  }, [index, opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{translateY: translateY.value}],
  }));

  return (
    <Animated.View
      style={[animatedStyle, showDivider ? styles.dividerWrapper : {}]}>
      <ServiceCard
        icon={service.icon}
        title={service.title}
        description={service.description}
        onPress={() => onItemPress?.(service.screen)}
      />
      {showDivider && <View style={styles.divider} />}
    </Animated.View>
  );
};

const ServiceList: React.FC<ServiceListProps> = ({
  data,
  onItemPress,
  scrollable = false,
  showDivider = false,
  containerStyle,
}) => {
  const Container = scrollable ? ScrollView : View;

  return (
    <Container contentContainerStyle={[styles.wrapper, containerStyle]}>
      {data.map((service, index) => (
        <AnimatedServiceItem
          key={service.id}
          service={service}
          index={index}
          showDivider={showDivider}
          onItemPress={onItemPress}
        />
      ))}
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 4,
  },
  dividerWrapper: {
    marginBottom: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 6,
  },
});

export default ServiceList;
