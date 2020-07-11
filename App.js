import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('blue');

  return (
    <View style={[styles.page, { backgroundColor }]}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => setBackgroundColor('yellow')}
        underlayColor='orange'
      >
        <View style={styles.row}>
          <View style={[styles.sample, { backgroundColor: 'yellow' }]} />
          <Text style={styles.buttonText}>Yellow</Text>
        </View>
      </TouchableHighlight>
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
