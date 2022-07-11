import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
