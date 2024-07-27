import React from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';

const TopNavigationBar = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#c7f8f6" />
      <View style={styles.topBar}>
        <View style={styles.topNavbar}>
          <Image
            style={styles.logo}
            source={require('../../assets/urlab.png')}
          />
          <View style={styles.iconsContainer}>
            <Image
              style={styles.groupIcon}
              source={require('../../assets/group.png')}
            />
            <Image
              style={styles.icon}
              source={require('../../assets/bell-pin.png')}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topNavbar: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff', // White background
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
    top:1,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default TopNavigationBar;
