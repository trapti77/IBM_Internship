import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    description: 'Lorem ipsum dolor sit amet.',
    mobile: '+1234567890',
    email: 'john.doe@example.com',
    address: '123 Main St, City, Country',
    dayAndTime: 'Monday - Friday, 9:00 AM - 5:00 PM',
  });
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch profile data from database on component mount
    // Replace with actual database fetch logic
  }, []);

  const handleSave = (key) => {
    // Save the updated data to the database
    setEditing(null);
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
  };

  const renderInfoContainer = (label, value, key) => (
    <View style={styles.infoContainer}>
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
        <Icon name={editing === key ? 'checkmark' : 'pencil'} size={20} color="#007AFF" />
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
        {renderInfoContainer('Name', profileData.name, 'name')}
        {renderInfoContainer('Description', profileData.description, 'description')}
        {renderInfoContainer('Mobile', profileData.mobile, 'mobile')}
        {renderInfoContainer('Email', profileData.email, 'email')}
        {renderInfoContainer('Address', profileData.address, 'address')}
        {renderInfoContainer('Day and Time', profileData.dayAndTime, 'dayAndTime')}
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() =>  navigation.navigate('Settings')}
        >
          <Text style={styles.settingsButtonText}>Settings</Text>
          <Icon
            name={settingsOpen ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#000"
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
        {settingsOpen && (
          <View style={styles.settingsContainer}>
            <Text style={styles.settingsOption}>Change Password</Text>
            <Text style={styles.settingsOption}>Privacy Settings</Text>
            <Text style={styles.settingsOption}>Notification Settings</Text>
            <Text style={styles.settingsOption}>Account Settings</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
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
    marginTop:10,
    backgroundColor: '#fff',
  },
  profileButtonText: {
    color: '#000',
    fontSize: 16,
    marginBottom:10,
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
  editButton: {
    marginLeft: 10,
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
    marginLeft: 10,
  },
  settingsContainer: {
    marginTop: 1,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  settingsOption: {
    fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    width: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom:50,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProfileScreen;
