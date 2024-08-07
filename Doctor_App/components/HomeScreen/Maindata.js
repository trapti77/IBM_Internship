import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; 
//import { fetchTodaySchedule, fetchTomorrowSchedule } from './api';// Assume these are API functions to fetch data  
import TodaySchedule from './Today';
import TomorrowSchedule from './Tomorrow';
import FilterButton from '../FilterButton/FilterButton';



const fetchTodaySchedule = async () => {
    // Replace with  API call
    return [
      { id: 1, name: 'John Doe', time: '10:00 AM', description: 'Check-up' },
      { id: 2, name: 'Jane Smith', time: '11:00 AM', description: 'Consultation' },
    ];
  };
  
  const fetchTomorrowSchedule = async () => {
    // Replace with  API call
    return [
      { id: 3, name: 'Alice Johnson', time: '9:00 AM', description: 'Routine check-up' },
      { id: 4, name: 'Bob Brown', time: '1:00 PM', description: 'Follow-up' },
    ];
  };

const TodaySchedulePage = () => {
  const [Today, setToday] = useState([]);
  const [Tomorrow, setTomorrow] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    // Fetch today's and tomorrow's schedule from the API
    const loadSchedules = async () => {
      const todayData = await fetchTodaySchedule();
      const tomorrowData = await fetchTomorrowSchedule();
      setToday(todayData);
      setTomorrow(tomorrowData);
    };

    loadSchedules();
  }, []);

  const handleViewPress = (patient) => {
    // Navigate to AddPatient screen with patient details as parameters
    navigation.navigate('AddPatient', { patient });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.FilterButton}>
        <FilterButton />
        </View>
      <TodaySchedule schedule={Today}/>
      <TomorrowSchedule schedule={Tomorrow} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7f8f6',
  },
  head: {
    width: 110,
    backgroundColor: '#0A8E8A',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#000', // Make header text white for better contrast
  },
  FilterButton:{
     width:120,
     margin:5,
     marginLeft:'auto',
     borderRadius:10,
  }
});

export default TodaySchedulePage;
