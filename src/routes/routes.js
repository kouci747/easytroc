//Navigation
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screens
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import AuthScreen from '../screens/Authscreen/AuthsScreen';
const Stack = createStackNavigator();

import React from 'react';

export default function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{headerShown: false,}}
      >
        <Stack.Screen
          name="LandingScreenNav"
          component={LandingScreen}
          //   options={{ headerShown: true,headerTitleAlign: 'center',headerTintColor: 'blue',}}
        />
        <Stack.Screen name="AuthScreenNav" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}