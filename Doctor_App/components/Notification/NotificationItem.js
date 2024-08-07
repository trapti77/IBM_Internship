import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationItem = ({ notification }) => {
  return (
    <View style={styles.notification}>
      <Text style={styles.Notify}>{notification}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',                      
  },
  Notify:{
    textAlign:'center',
  }
});

export default NotificationItem;
