import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NotificationIcon = ({ notificationCount, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconContainer}>
        <Text style={styles.notificationCount}>{notificationCount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
  },
  notificationCount: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 12,
    width: 24,
    height: 24,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationIcon;