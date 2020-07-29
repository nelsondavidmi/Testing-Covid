import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import PScreen from "./components/Home";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component= {PScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;