import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NotificationItem from './NotificationItem';

const NotificationList = ({ notifications, initialCount = 3 }) => {
  const [showMore, setShowMore] = useState(false);

  const visibleNotifications = showMore ? notifications : notifications.slice(0, initialCount);

  return (
    <View style={styles.notificationsList}>
      {visibleNotifications.map((notification, index) => (
        <NotificationItem key={index} notification={notification} />
      ))}
      {notifications.length > initialCount && (
        <TouchableOpacity onPress={() => setShowMore(!showMore)} style={styles.viewMoreButton}>
          <Text style={styles.viewMoreText}>{showMore ? 'View Less' : 'View More'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationsList: {
    width:'110%',
  },
  viewMoreButton: {
    marginTop: 10,
  },
  viewMoreText: {
    fontSize: 16,
    color: '#007bff',
    textAlign:'center',
  },
});

export default NotificationList;
