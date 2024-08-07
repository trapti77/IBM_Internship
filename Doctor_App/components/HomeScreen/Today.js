import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Define TomorrowSchedule component
const TodaySchedule = ({ schedule }) => {
  const navigation = useNavigation(); 

  const handleViewPress = (patient) => {
    // Navigate to AddPatient screen with patient details as parameters
    navigation.navigate('AddPatient', { patient });
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.header}>Today</Text>
      </View>
      {schedule.map((patient, index) => (
        <View key={index} style={styles.patientItem}>
          <Text style={styles.patientText}>{patient.name}</Text>
          <Text style={styles.patientText}>{patient.time}</Text>
          <TouchableOpacity 
            onPress={() => handleViewPress(patient)} 
            style={styles.viewButton}
          >
            <Text style={styles.viewButtonText}>View</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
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
        textAlign:'center',
        color: '#fff', // Make header text white for better contrast
      },
      patientItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 2,
        alignItems:'center',
        width: '100%',
        borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
      },
      patientText: {
        fontSize: 16,
        textAlign: 'center', 
      },
      viewButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#009688',
        borderRadius: 5,
      },
      viewButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
    });

export default TodaySchedule;
