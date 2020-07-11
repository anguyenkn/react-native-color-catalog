import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';

import mochaImage from './assets/mocha.jpg';

export default function App() {
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={mochaImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    borderRadius: 35,
    marginTop: 10,
    marginBottom: 10,
    width: Dimensions.get('window').width - 10,
  },
});
