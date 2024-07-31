import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigationBar from './BottomNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='BottomNav'>
      <Stack.Screen name="BottomNav" component={BottomNavigationBar} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
