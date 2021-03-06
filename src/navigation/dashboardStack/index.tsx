import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
