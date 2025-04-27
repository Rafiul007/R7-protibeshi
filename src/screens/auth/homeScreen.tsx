import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import ProfileCard from '../../components/Molucules/ProfileCard';

const HomeScreen = () => {
  // Step 1: Create shared values
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(30);

  // Step 2: Create animated styles
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{translateY: translateY.value}],
    };
  });

  // Step 3: Start animation on mount
  useEffect(() => {
    opacity.value = withTiming(1, {duration: 1000});
    translateY.value = withTiming(0, {duration: 1000});
  }, [ opacity, translateY ]);

  return (
    <SafeAreaView style={{flex: 1, padding: 16}}>
      <ProfileCard
        fullName="John Doe"
        houseNumber="1234"
        mobileNumber="+1234567890"
      />
      {/* 👉 Here is your animated Text */}
      <Animated.Text
        style={[
          {fontSize: 24, fontWeight: 'bold', marginTop: 30},
          animatedTextStyle,
        ]}>
        Welcome to Home Screen!
      </Animated.Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
