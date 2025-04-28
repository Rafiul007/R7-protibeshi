import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const BillScreen = () => {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const [a, setA] = useState(false);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: scale.value}],
  }));

  const shrinkAndFade = () => {
    if (a) {
      opacity.value = withTiming(1, {duration: 500});
      scale.value = withTiming(1, {duration: 500});
    } else {
      opacity.value = withTiming(0.5, {duration: 1000});
      scale.value = withTiming(0.5, {duration: 1000});
    }
    setA(!a);
  };

  return (
    <SafeAreaView style={{flex: 1, padding: 16}}>
      <View>
        <Text>billScreen</Text>
        <Animated.View
          style={[
            {width: 100, height: 100, backgroundColor: 'red'},
            animatedStyle,
          ]}
        />
        <Button title="Shrink and Fade" onPress={shrinkAndFade} />
      </View>
    </SafeAreaView>
  );
};

export default BillScreen;
