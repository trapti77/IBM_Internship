import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CalendarScreen from './Calendar';



const ScheduleCalendar = () => {
    const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.viewcontainer}>
        {/* Greeting Section */}
        <View style={styles.greetingSection}>
          <View style={styles.greetingView}>
            <Text style={styles.greetingText}>Good Morning, Buddy</Text>
          </View>
          <View style={styles.gradientContainer}>
            <LinearGradient
              colors={['#0A94F8', '#C876C9', '#FF6E91']}
              locations={[0, 0.53, 1]}
              style={styles.gradientBorder}
            >
              <View style={styles.profileImageContainer}>
                <Image
                  style={styles.profileImage}
                  source={{ uri: '' }} // Replace with your profile image URL
                />
              </View>
            </LinearGradient>
          </View>
        </View>

        {/* Calendar Section */}
        <View style={styles.calendarSection}>
          <CalendarScreen />
        </View>

        {/* Schedule Section */}
        <View style={styles.scheduleSection}>
          <Text style={styles.sectionTitle}>Today's Schedule</Text>
          <View style={styles.scheduleContainer}>
          <View style={styles.scheduleTime}>
            <Text style={styles.scheduleTiming}>09:00</Text>
          </View>
          <View style={styles.scheduleData}>
            <View style={styles.scheduleBox}>
              <Text style={styles.scheduleText}>Meeting with Team</Text>
            </View>
            </View>
            </View>
            <View style={styles.scheduleTime}>
            <Text style={styles.scheduleTiming}>10:00</Text>
          </View>
        
       

        <View style={styles.scheduleContainer}>
          <View style={styles.scheduleTime}>
            <Text style={styles.scheduleTiming}>09:00</Text>
          </View>
          <View style={styles.scheduleData}>
            <View style={styles.scheduleBox}>
              <Text style={styles.scheduleText}>Meeting with Team</Text>
            </View>
            </View>
            </View>
            <View style={styles.scheduleTime}>
            <Text style={styles.scheduleTiming}>10:00</Text>
          </View>
        
          {/* Reminders Section */}
          <View style={styles.reminderSection}>
            <Text style={styles.sectionTitle}>Reminders</Text>
            <Text style={styles.sectionpara}>Don't forget Schedule for Tomorrow</Text>
            <View style={styles.reminderContainer}>
              <Image
                style={styles.calendarImage}
                source={require('../../../assets/calendar1.png')}
              />
              <View style={styles.separatedata}>
                <LinearGradient
                  colors={['#8572FF','#BAB0F9']}
                  locations={[1,1]}
                  style={styles.reminderdata}
                >
                  <Text style={styles.reminderText}>Doctor's Appointment</Text>
                </LinearGradient>
                <View style={styles.timewithIcon}>
                  <Icon name="alarm-outline" size={20} color="#fff" style={styles.reminderIcon} />
                  <Text style={styles.reminderText}>2:00 - 4:00</Text>
                </View>
              </View>
            </View>
            <View style={styles.reminderContainer}>
              <Image
                style={styles.calendarImage}
                source={require('../../../assets/calendar1.png')}
              />
              <View style={styles.separatedata}>
                <LinearGradient
                  colors={['#8572FF','#BAB0F9']}
                  locations={[1,1]}
                  style={styles.reminderdata}
                >
                  <Text style={styles.reminderText}>Pick up groceries</Text>
                </LinearGradient>
                <View style={styles.timewithIcon}>
                  <Icon name="alarm-outline" size={20} color="#fff" style={styles.reminderIcon} />
                  <Text style={styles.reminderText}>2:00 - 4:00</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity  onPress={() => navigation.navigate('SetScheduleTime')}>
            <LinearGradient
              colors={['#0A8E8A', '#09EFE8']}
              locations={[0.12, 1]}
              style={styles.SetScheduleButton}
            >
              <Text style={styles.SetScheduleText}>Set Schedule</Text>
            </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.BackToHomeButton}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        <Text style={styles.BackToHomeText}>Back To Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#c7f8f6',
  },
  viewcontainer: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  greetingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  greetingView: {
    width: 200,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  gradientContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBorder: {
    width: 60,
    height: 60,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2, // This padding creates space for the border
  },
  profileImageContainer: {
    width: 56, // Slightly smaller than the gradient border to fit inside
    height: 56,
    borderRadius: 23,
    backgroundColor: '#fff', // White background for the profile image
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
  },
  calendarImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderColor: '#fff',
  },
  calendarSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionpara: {
    paddingBottom: 20,
  },
  scheduleSection: {
    marginBottom: 20,
  },
  scheduleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    marginTop: 10,
  },
  scheduleTime: {
    width: '30%',
    paddingRight: 10, // Space between time and data
  },
  scheduleData: {
    width: '70%',
  },
  scheduleBox: {
    backgroundColor: '#0A8E8A',
    padding: 30,
    borderRadius: 20,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scheduleText: {
    fontSize: 16,
    color: '#fff',
  },
  scheduleTiming: {
    color: 'grey',
    fontSize: 16,
    textAlign: 'left',
  },
  separatedata: {
    marginLeft: 50,
  },
  reminderSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  reminderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#8572FF',
  },
  timewithIcon: {
    flexDirection: 'row',
  },
  reminderIcon: {
    top: 1,
    marginRight: 8,
  },
  reminderText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  SetScheduleButton: {
    width: '80%',
    padding: 15,
    borderRadius: 50,
    marginTop: 30,
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SetScheduleText: {
    fontSize: 20,
    color: '#fff',
  },
  BackToHomeButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0A8E8A',
    margin: 20,
    marginTop: 20,
    marginBottom: 90,
    backgroundColor: '#fff',
  },
  BackToHomeText: {
    textAlign: 'center',
    color: '#0A8E8A',
    padding: 10,
    fontSize: 15,
  },
});

export default ScheduleCalendar;
