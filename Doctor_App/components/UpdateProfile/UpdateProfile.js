import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleButton from '../FilterButton/ToggleButton';

const { height: screenHeight } = Dimensions.get('window');

const ProfileScreen = () => {
  const [editing, setEditing] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Anjali',
    description: ' hii',
    mobile: '+1234567890',
    email: 'anjali@gmail.com',
    address: '123 Main St, City, Country',
  });

  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: showSettings ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [showSettings]);

  const handleSave = (key) => {
    // Save the updated data to the database
    setEditing(null);
  };


  const handleSettingsPress = (screen) => {
    // Close settings menu
    setShowSettings(false);
  };
  

  const renderInfoContainer = (label, value, key) => (
    <View style={styles.infoContainer} key={key}>
      <Text style={styles.label}>{label}</Text>
      {editing === key ? (
        <TextInput
          style={[
            styles.input,
            (key === 'description' || key === 'address') && styles.largeInput,
          ]}
          value={profileData[key]}
          onChangeText={(text) => setProfileData({ ...profileData, [key]: text })}
          multiline
        />
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => setEditing(editing === key ? null : key)}
      >
        <Image
          source={require('../../assets/Edit_icon.png')}
          style={styles.editImage}
        />
      </TouchableOpacity>
      {editing === key && (
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => handleSave(key)}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const animatedTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight, 0],
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <Image
          style={styles.profilePhoto}
          source={require('../../assets/user.png')}
        />
        <TouchableOpacity
          style={styles.updateProfileButton}
          onPress={() => navigation.navigate('UpdateProfilePhoto')}
        >
          <Text style={styles.profileButtonText}>Update Profile Photo</Text>
        </TouchableOpacity>
        {Object.entries(profileData).map(([key, value]) =>
          renderInfoContainer(
            key.charAt(0).toUpperCase() + key.slice(1),
            value,
            key
          )
        )}
        <TouchableOpacity
            style={styles.infoContainer}
            onPress={() => navigation.navigate('ScheduleCalendar')}
                >
                  <Text style={styles.label}>Day and Time</Text>
                  <Text style={styles.value}>{profileData.Day_time}</Text>
              </TouchableOpacity>


        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => setShowSettings(!showSettings)}
        >
          <Text style={styles.settingsButtonText}>Settings</Text>
          <Icon
            name={showSettings ? 'chevron-down' : 'chevron-forward'}
            size={20}
            color="#000"
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
        <Animated.View style={[styles.settingsMenu, { transform: [{ translateY: animatedTranslateY }] }]}>
          <View style={styles.settingsOption}>

          <TouchableOpacity
          style={styles.settingsMenuItem}
          onPress={() => setShowSettings(!showSettings)}
        >
          <Text style={styles.settingsMenuItemText}>Settings</Text>
          <Icon
            name={showSettings ? 'chevron-down' : 'chevron-forward'}
            size={20}
            color="#000"
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
            {['AddManager', 'ChangePassword', 'NotificationSettings', 'BookingHistory', 'NeedHelp', 'Analysis', 'Logout'].map((screen, index) => (
              <TouchableOpacity
                key={index}
                style={styles.settingsMenuItem}
              >
                <Text style={styles.settingsMenuItemText}>
                  {screen.replace(/([A-Z])/g, ' $1').trim()}
                </Text>
                <Icon
                  name={showSettings ? 'chevron-forward' : 'chevron-down'}
                  size={20}
                  color="#000"
                  style={styles.settingsIcon}
                />
              </TouchableOpacity>
            ))}
            <ToggleButton />
          </View>
          <TouchableOpacity
            style={styles.backToHomeButton}
            onPress={() => navigation.navigate('TodaySchedulePage')}
          >
            <Text style={styles.backToHomeText}>Back To Home</Text>
          </TouchableOpacity>
        </Animated.View>
        {!showSettings && (
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7f8f6',
  },
  scrollViewContentContainer: {
    alignItems: 'center',
    padding: 10,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  updateProfileButton: {
    marginBottom: 10,
  },
  profileButtonText: {
    color: '#000',
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    minHeight: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    color: '#888',
  },
  value: {
    fontSize: 15,
    color: '#000',
    flex: 1,
    marginLeft: 10,
  },
  input: {
    fontSize: 18,
    color: '#000',
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  largeInput: {
    minHeight: 60,
  },
  editButton: {
    marginLeft: 10,
  },
  editImage: {
    width: 20,
    height: 20,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  saveButtonText: {
    color: '#fff',
  },
  settingsButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  settingsButtonText: {
    color: '#000',
    fontSize: 16,
    flex: 1,
  },
  settingsIcon: {
    marginRight: 10,
  },
  settingsMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '103%',
    backgroundColor: '#c7f8f6',
    padding: 5,
  },
  settingsOption: {
    width: '100%',
    backgroundColor: '#fff',
  },
  settingsMenuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:20,
    borderColor:'#ccc',
    borderWidth:0.5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  settingsMenuItemText: {
    fontSize: 16,
    color: '#000',
  },
  backToHomeButton: {
    borderWidth: 1,
    borderColor: '#0A8E8A',
    marginTop: 100,
    backgroundColor: '#fff',
  },
  backToHomeText: {
    textAlign: 'center',
    color: '#0A8E8A',
    padding: 10,
    fontSize: 15,
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    width: '100%',
    backgroundColor: '#0A8E8A',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProfileScreen;
