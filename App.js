import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect (() => newGuess(), [])
  const newGuess = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setCount(1);
    setResult('');
  }
  

  const compare = () => {
    

    if (parseInt(text) > number) {
      setResult(`Your guess ${text} is too high`);
    } else if (parseInt(text) < number) {
      setResult(`Your guess ${text} is too low`);
    } else {
      Alert.alert(`You guessed the number in ${count}`);
      newGuess();
    }

    setCount(prCount => prCount+1);
  }





  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <Text>{result}</Text>
      <TextInput
        style ={{width: 200, borderColor: 'grey', borderWidth: 1, margin: 10}}
        keyboardType ={'numeric'}
        onChangeText={text=> setText(text)}
        value={text}
        />
      
    
    <View style={styles.buttonStyle}>
      <Button 
        title='MAKE GUESS'
        onPress = {compare}/>
    </View>
    
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5
  }
});

