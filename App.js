import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

function ColorButton({ backgroundColor, onPress = (f) => f }) {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onPress(backgroundColor)}
      underlayColor='orange'
    >
      <View style={styles.row}>
        <View style={[styles.sample, { backgroundColor }]} />
        <Text style={styles.buttonText}>{backgroundColor}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('blue');

  return (
    <View style={[styles.page, { backgroundColor }]}>
      <ColorButton backgroundColor='red' onPress={setBackgroundColor} />
      <ColorButton backgroundColor='green' onPress={setBackgroundColor} />
      <ColorButton backgroundColor='blue' onPress={setBackgroundColor} />
      <ColorButton backgroundColor='yellow' onPress={setBackgroundColor} />
      <ColorButton backgroundColor='purple' onPress={setBackgroundColor} />
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
