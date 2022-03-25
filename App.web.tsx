// import { StackNavigator } from 'react-navigation';
import Connectivity from './watch';
//import Home from './Home';
import HomeScreen from './HomeScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Fetch from './Fetch.web';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
       <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Excel" component={Fetch} />
          </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}