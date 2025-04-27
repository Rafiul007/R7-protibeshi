import React from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const {width} = Dimensions.get('window');

const MyCarousel = () => {
  const data = ['🦁', '🐯', '🐼', '🦊', '🐻'];

  return (
    <View style={styles.container}>
      <Carousel
        width={width * 0.8}
        height={250}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('Snapped to:', index)}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#d1c4e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 60,
  },
});
