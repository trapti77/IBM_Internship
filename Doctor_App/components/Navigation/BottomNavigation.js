import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import AddPatient from '../Add_Patient_Detail/PatientDetail';
import ProfileScreen from '../UpdateProfile/UpdateProfile';
import FileDockScreen from '../Screens/FileDockScreen';
import TopNavigationBar from './TopNavigation';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 4,
    right: 0,
    left: 0,
    elevation: 0,
    backgroundColor: '#fff',
  },
};

const BottomNavigationBar = () => {
  return (
    <>
      <TopNavigationBar />
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../assets/home-light.png')}
                resizeMode='contain'
                style={{
                  height: 33,
                  width: 33,
                  tintColor: focused ? '' : '#8E8E93',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AddPatient"
          component={AddPatient}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../assets/add-circle.png')}
                resizeMode='contain'
                style={{
                  height: 31,
                  width: 31,
                  tintColor: focused ? '' : '#8E8E93',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={FileDockScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../assets/file-dock.png')}
                resizeMode='contain'
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '' : '#8E8E93',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../assets/user.png')}
                resizeMode='contain'
                style={{
                  height: 32,
                  width: 32,
                  tintColor: focused ? '' : '#8E8E93',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigationBar;
