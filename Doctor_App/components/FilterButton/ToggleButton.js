import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Animated,
} from 'react-native';

const ToggleButton = ({ onToggle, initialState = false }) => {
  const [isActive, setIsActive] = useState(initialState);
  const [toggleAnimation] = useState(new Animated.Value(initialState ? 1 : 0));

  const handlePress = () => {
    const newValue = !isActive;
    setIsActive(newValue);
    Animated.timing(toggleAnimation, {
      toValue: newValue ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    if (onToggle) onToggle(newValue);
  };

  const circleTranslateX = toggleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20], // Adjust based on button size
  });

  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={handlePress}
    >
      <View style={styles.toggleContainer}>
        <Animated.View
          style={[
            styles.toggleCircle,
            {
              transform: [{ translateX: circleTranslateX }],
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'#fff',
  },
  activeButton: {
    backgroundColor: '#c7f8f6', // Green color for active
  },
  inactiveButton: {
    backgroundColor: '#000', // Red color for inactive
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  toggleContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    borderWidth:1,
    borderColor:'#ccc',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 5,
    position: 'relative',
  },
  toggleCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#000',
    position: 'absolute',
    top: 3,
  },
});

export default ToggleButton;
