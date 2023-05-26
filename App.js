import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screen/Splash';
import { StatusBar, LogBox } from 'react-native';
import { colors } from './utils';
import Home from './Screen/Home';
import Cek from './Screen/Cek';
import Menu5 from './Screen/Menu5';
import Menu1 from './Screen/Menu1';
import Menu2 from './Screen/Menu2';
import Menu3 from './Screen/Menu3';
import Menu4 from './Screen/Menu4';
import Tentang from './Screen/Tentang';
import Youtube from './Screen/Youtube';

const Stack = createStackNavigator();
export default function App() {

  LogBox.ignoreAllLogs();


  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cek"
          component={Cek}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Youtube"
          component={Youtube}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Tentang"
          component={Tentang}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu5"
          component={Menu5}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu4"
          component={Menu4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu3"
          component={Menu3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu2"
          component={Menu2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu1"
          component={Menu1}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
