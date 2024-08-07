import React, { useState } from 'react';
import { StyleSheet, View, Image, StatusBar, TouchableOpacity, Animated } from 'react-native';
import NotificationList from '../Notification/NotificationList';

const TopNavigationBar = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-200)); // Initial position off the screen

  const toggleNotifications = () => {
    if (isNotificationVisible) {
      Animated.timing(slideAnim, {
        toValue: -200, // Slide up out of view
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsNotificationVisible(false));
    } else {
      setIsNotificationVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0, // Slide down into view
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const notifications = [
    'Notification 1',
    'Notification 2',
    'Notification 3',
    'Notification 4',
    'Notification 5',
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#c7f8f6" />
      <View style={styles.topBar}>
        <View style={styles.topNavbar}>
          <Image style={styles.logo} source={require('../../assets/urlab.png')} />
          <View style={styles.iconsContainer}>
            <Image style={styles.groupIcon} source={require('../../assets/group.png')} />
            <TouchableOpacity onPress={toggleNotifications}>
              <Image style={styles.icon} source={require('../../assets/bell-pin.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isNotificationVisible && (
        <Animated.View style={[styles.notificationsContainer, { transform: [{ translateY: slideAnim }] }]}>
          <NotificationList notifications={notifications} />
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  topNavbar: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  logo: {
    width: 160,
    height: 43,
    resizeMode: 'contain',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  groupIcon: {
    width: 23,
    height: 23,
    top: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  notificationsContainer: {
    position: 'absolute',
    top: 70,
    width: '90%',
    marginLeft:20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 20,
    alignItems: 'center',
    zIndex: 10, // Make sure it's above other content
  },
});

export default TopNavigationBar;
