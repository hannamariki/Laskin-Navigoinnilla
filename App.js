import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './komponentit/Calculator';
import History from './komponentit/History';

const Stack = createNativeStackNavigator();

export default function App() {
  const [history, setHistory] = useState([]);

  const addToHistory = (entry) => {
    setHistory([...history, entry]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Calculator">
          {props => <Calculator {...props} onAddHistory={addToHistory} />}
        </Stack.Screen>
        <Stack.Screen name="History">
          {props => <History {...props} history={history} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}