import React, { useState } from 'react';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';

export default function Calculator({ navigation, onAddHistory }) {
  const [result, setResult] = useState(' ');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const addTogether = () => {
    const num1 = parseInt(number1) || 0;
    const num2 = parseInt(number2) || 0;
    const lisays = num1 + num2;
    setResult(lisays.toString());
    onAddHistory(`${number1} + ${number2} = ${lisays}`);

    setNumber1('');
    setNumber2('');
  };

  const minusTogether = () => {
    const num1 = parseInt(number1) || 0;
    const num2 = parseInt(number2) || 0;
    const erotus = num1 - num2;
    setResult(erotus.toString());
    onAddHistory(`${number1} - ${number2} = ${erotus}`);

    setNumber1('');
    setNumber2('');
  };

  return (
    <View>
      <Text style={styles.title}>Result: {result}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber1(text)}
        value={number1}
        placeholder=" "
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber2(text)}
        value={number2}
        placeholder=" "
        keyboardType="numeric"
      />

      <View style={styles.Button}>
        <Button title="+" onPress={addTogether} />
        <Button title="-" onPress={minusTogether} />
        <Button title="History" onPress={() => navigation.navigate('History')} />
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    width: 250,
    height: 47,
    borderWidth: 1,
    padding: 16,
    textAlign: 'center',
    alignSelf: 'center', 
    flexDirection: 'row',
    
  },
  title: {
    marginTop: 100, 
    textAlign: 'center',
    marginVertical: 10,
  },

  Button:{
    width: 150,
    alignSelf: 'center',  
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginVertical: 20,
  },

});

