import React from 'react';
import { View, TextInput } from 'react-native';
import './App.css';

export default function App() {
  return (
    <View className="container">
      <h1>Ban Book</h1>
      <TextInput placeholder="Enter the behavior you want to track here"></TextInput>
    </View>
  );
}

