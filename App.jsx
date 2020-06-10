import React from 'react';
import { View} from 'react-native';
import BehaviorTracking from './src/components/BehaviorTracking'
import './App.css';

function App(props) {
  return (
      <View class="container">
        <BehaviorTracking></BehaviorTracking>
      </View>
  );
}

export default App;
