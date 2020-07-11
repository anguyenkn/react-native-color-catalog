import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ProgressViewIOS,
  ProgressBarIOS,
  Button,
  Alert,
  Dimensions,
  Platform,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  };
  return (
    <View style={{ padding: 50 }}>
      {Platform.Os === 'ios' && <ProgressViewIOS progress={0.5} />}
      {Platform.Os === 'android' && (
        <ProgressBarIOS
          styleAttr='Horizontal'
          indeterminate={false}
          color={'blue'}
          progress={0.5}
        />
      )}
      <ActivityIndicator size='large' color='#61DBFb' />
      <Button title='Click me' onPress={onButtonPress} />
      <Text>OS: {Platform.OS}</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
    </View>
  );
}
