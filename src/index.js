import React from 'react';
import { View, Text } from 'react-native';

import './config/ReactotronConfig';

export default function App() {
  console.tron.log('teste');
  return (
    <View>
      <Text>Welcome to React Native.</Text>
    </View>
  );
}
