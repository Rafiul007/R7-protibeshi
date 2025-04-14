import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export class profileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, padding: 16}}>
        <View>
          <Text>profileScreen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default profileScreen;
