import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('blue');

  return (
    <View style={[styles.page, { backgroundColor }]}>
      <Text style={styles.button} onPress={() => setBackgroundColor('green')}>
        Green
      </Text>
      <Text style={styles.button} onPress={() => setBackgroundColor('red')}>
        Red
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    fontSize: 30,
    margin: 10,
    padding: 10,
  },
});
