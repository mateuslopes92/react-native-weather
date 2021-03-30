import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './pages/Home';
import NextDaysScreen from './pages/NextDays';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NextDays" component={NextDaysScreen} />
    </Stack.Navigator>
  );
}

export default Routes;
