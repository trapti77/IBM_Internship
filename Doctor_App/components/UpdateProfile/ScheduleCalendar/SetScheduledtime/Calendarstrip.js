import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const CalendarStrip = ({ dates, onDateSelect }) => {
    const [expanded, setExpanded] = useState(false);
    const today = new Date().toDateString(); // Get today's date string

    const handleDateSelect = (date) => {
        onDateSelect(date);
        setExpanded(false); // Collapse on date select
    };

    return (
        <View style={styles.calendarContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {dates.slice(0, expanded ? dates.length : 3).map((date, index) => {
                    const dateString = date.toDateString();
                    const isToday = dateString === today;
                    
                    return (
                        <TouchableOpacity 
                            key={index} 
                            style={[styles.dateCard, isToday && styles.todayDateCard]} 
                            onPress={() => handleDateSelect(date)}
                        >
                            <Text style={[styles.dateText, isToday && styles.todayDateText]}>
                                {date.getDate()}
                            </Text>
                            <Text style={[styles.dayText, isToday && styles.todayDateText]}>
                                {date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
                {dates.length > 3 && (
                    <TouchableOpacity style={styles.dateCard} onPress={() => setExpanded(!expanded)}>
                        <Text style={styles.expandText}>{expanded ? 'Show Less' : 'Other'}</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    calendarContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    dateCard: {
        width: 70,
        height: 110,
        backgroundColor: '#f1f5f9',
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        justifyContent: 'center',
    },
    todayDateCard: {
        backgroundColor: '#8572ff',
    },
    dateText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    todayDateText: {
        color: '#fff', // White text color for today's date
    },
    dayText: {
        fontSize: 14,
        color: '#000', // Default text color
    },
    expandText: {
        color: '#000',
    },
});

export default CalendarStrip;
