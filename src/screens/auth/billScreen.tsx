import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const billScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, padding: 16}}>
      <View>
        <Text>billScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default billScreen;
