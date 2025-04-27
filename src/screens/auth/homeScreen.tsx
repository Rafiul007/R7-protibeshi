import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import ProfileCard from '../../components/Molucules/ProfileCard';
import MyCarousel from '../../components/test/test';

const HomeScreen = () => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(30);

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{translateY: translateY.value}],
  }));

  useEffect(() => {
    opacity.value = withTiming(1, {duration: 1000});
    translateY.value = withTiming(0, {duration: 1000});
  }, [opacity, translateY]);

  // 🛠 Gesture setup (new API)
  const dragX = useSharedValue(0);
  const dragY = useSharedValue(0);

  const animatedBoxStyle = useAnimatedStyle(() => ({
    transform: [{translateX: dragX.value}, {translateY: dragY.value}],
  }));

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      dragX.value = event.translationX;
      dragY.value = event.translationY;
    })
    .onEnd(() => {
      dragX.value = withSpring(0);
      dragY.value = withSpring(0);
    });

  return (
    <SafeAreaView style={{flex: 1, padding: 16}}>
      {/* Profile Card */}
      <ProfileCard
        fullName="John Doe"
        houseNumber="1234"
        mobileNumber="+1234567890"
      />

      {/* Animated Welcome Text */}
      <Animated.Text
        style={[
          {fontSize: 24, fontWeight: 'bold', marginTop: 30},
          animatedTextStyle,
        ]}>
        Welcome to Home Screen!
      </Animated.Text>

      {/* Gesture Detector Draggable Box */}
      <View style={styles.gestureContainer}>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.box, animatedBoxStyle]} />
        </GestureDetector>
      </View>
      <MyCarousel />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});
