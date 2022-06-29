import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/LoginScreen';
import {HomeScreen} from '../screens/HomeScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
