/* eslint-disable react-hooks/rules-of-hooks */
import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const SwipeableItem = ({
  item,
  onDelete,
}: {
  item: ItemType;
  onDelete: (id: number) => void;
}) => {
  const translateX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  // gesture handler to handle swipe
  const penGesture = Gesture.Pan()
    .onUpdate(e => {
      if (e.translationX < 0) {
        translateX.value = e.translationX;
      }
    })
    .onEnd(() => {
      if (translateX.value < -200) {
        translateX.value = withTiming(500);
        runOnJS(onDelete)(item.id);
      } else {
        translateX.value = withTiming(0);
      }
    });

  return (
    <GestureDetector gesture={penGesture}>
      <Animated.View style={[styles.item, animatedStyle]}>
        <Text style={styles.itemText}>{item.name}</Text>
      </Animated.View>
    </GestureDetector>
  );
};

type ItemType = {
  id: number;
  name: string;
};

export const ProfileScreen = () => {
  const [items, setItems] = useState<ItemType[]>([
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
    {id: 4, name: 'Item 4'},
  ]);

  const handleDelete = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const renderItem = ({item}: {item: ItemType}) => {
    return <SwipeableItem item={item} onDelete={handleDelete} />;
  };
  return (
    <View style={styles.container}>
      <Text>profileScreen</Text>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    backgroundColor: 'skyblue',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
  },
});

export default ProfileScreen;
