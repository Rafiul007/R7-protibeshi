import React, {Component} from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';

export class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    );
  }
}

export default App;
