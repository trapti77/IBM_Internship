import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const CalendarScreen = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const currentDate = getCurrentDate();
  const { width } = Dimensions.get('window');
  const dayWidth = width / 5; // Divide width by 5 to show 5 days

  // Function to get the abbreviated day name
  const getAbbreviatedDayName = (date) => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return dayNames[date.getDay()].slice(0, 2);
  };

  const renderDayName = (date) => {
    return (
      <Text style={styles.dateName}>{getAbbreviatedDayName(date)}</Text>
    );
  };

  return (
    <View style={styles.container}>
      <CalendarStrip
        scrollable
        style={styles.calendarStrip}
        calendarHeaderStyle={styles.hidden} // Hide calendar header
        dateNumberStyle={styles.dateNumber}
        dateNameStyle={styles.dateName} // Use the style for the day name
        highlightDateNumberStyle={styles.highlightDateNumber}
        highlightDateNameStyle={styles.highlightDateName}
        highlightDateContainerStyle={styles.highlightDateContainerStyle}
        dayComponentHeight={styles.containheight.height} // Set height for the day component
        leftSelector={[]}
        rightSelector={[]}
        markedDates={[{
          date: currentDate,
          dots: [{
            color: 'skyblue',
            selectedColor: '#0A8E8A',
          }],
          customStyles: {
            container: {
              borderRadius: 10,
              width: dayWidth, // Adjust width of each day component
              height: 70, // Adjust height as needed
            },
          }
        }]}
        selectedDate={currentDate}
        onDateSelected={(date) => {
          console.log('Selected date:', date);
        }}
        iconContainer={{ flex: 0.1 }}
        dayComponentContainerStyle={styles.dayComponentContainer}
        renderDayName={renderDayName} // Custom rendering function
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  calendarStrip: {
    height: 100,
    paddingTop: 10,
    paddingBottom: 10,
  },
  hidden: {
    display: 'none', // Hide the element
  },
  dateNumber: {
    color: '#000',
    fontSize: 16,
  },
  dateName: {
    color: 'grey',
    fontSize: 14,
  },
  containheight: {
    height: 70, // Set desired height for the day component
  },
  highlightDateContainerStyle: {
    backgroundColor:'#c7f8f6',
    borderRadius: 10,
    width:40, // Adjust width as needed
    height: 70, // Set height for the highlighted date
  },
  highlightDateNumber: {
    color: '#0A8E8A',
    fontSize: 25,
  },
  highlightDateName: {
    color: '#0A8E8A',
    fontSize: 14,
  },
  dayComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CalendarScreen;