import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Red</Text>
      <Text style={(styles.text, styles.selectedText)}>Green</Text>
      <Text style={styles.text}>Blue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
    backgroundColor: '#DDD',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    backgroundColor: 'yellow',
    margin: 10,
    padding: 5,
  },
  selectedText: {
    fontSize: 22,
    backgroundColor: 'red',
    color: 'yellow',
    margin: 10,
    padding: 5,
  },
});
