import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, AsyncStorage } from 'react-native';
import ColorButton from './components/ColorButton';
import ColorForm from './components/ColorForm';
import { generate } from 'shortid';

const useColors = () => {
  const [colors, setColors] = useState([]);

  const loadColors = async () => {
    const colorData = await AsyncStorage.getItem('@ColorListStore:Colors');
    if (colorData) {
      const colors = JSON.parse(colorData);
      setColors(colors);
    }
  };

  useEffect(() => {
    if (colors.length) return;
    loadColors();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@ColorListStore:Colors', JSON.stringify(colors));
  }, [colors]);

  const addColor = (color) => {
    const newColor = { id: generate(), color };
    setColors([newColor, ...colors]);
  };

  return { colors, addColor };
};

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const { colors, addColor } = useColors();

  return (
    <>
      <ColorForm onNewColor={addColor} />
      <FlatList
        style={[styles.container, { backgroundColor }]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={setBackgroundColor}
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});
