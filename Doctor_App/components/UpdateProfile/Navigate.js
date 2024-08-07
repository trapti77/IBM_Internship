import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen/LoginScreen';
import ProfileScreen from './UpdateProfile';
import ScheduleCalendar from './ScheduleCalendar/ScheduleCalendar';
import SetScheduleTime from './ScheduleCalendar/SetScheduledtime/SetScheduledtime';
import TodaySchedulePage from '../HomeScreen/Maindata';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen" // Set the initial route to LoginScreen
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ScheduleCalendar" component={ScheduleCalendar} />
      <Stack.Screen name="SetScheduleTime" component={SetScheduleTime} />
      <Stack.Screen name="TodaySchedulePage" component={TodaySchedulePage} />
    </Stack.Navigator>
  );
};

export default AppNavigation;