import React, { useState } from 'react';
import { View, Text, Image, Platform, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Provider as PaperProvider, TextInput, Card, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import CalendarStrip from './Calendarstrip'; // Import your new component
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

export default function SetScheduleTime() {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showFromPicker, setShowFromPicker] = useState(false);
    const [showToPicker, setShowToPicker] = useState(false);
    const [fromTime, setFromTime] = useState(new Date());
    const [toTime, setToTime] = useState(new Date());
    const [description, setDescription] = useState('');

    const onChangeDate = (event, selectedDate) => {
        setShowDatePicker(Platform.OS === 'ios');
        setDate(selectedDate || date);
    };

    const onChangeTime = (event, selectedDate, setter) => {
        setter(selectedDate || fromTime);
        if (Platform.OS !== 'ios') {
            setShowFromPicker(false);
            setShowToPicker(false);
        }
    };

    const showDatepicker = () => setShowDatePicker(true);

    const dates = Array.from({ length: 10 }, (_, i) => new Date(Date.now() + i * 24 * 60 * 60 * 1000)); // Example dates

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Let's set the schedule easily</Text>

                <Text style={styles.heading}>Select the Date</Text>
                <Card.Content>
                    <CalendarStrip dates={dates} onDateSelect={setDate} />
                </Card.Content>

                <View>
                    <Text style={styles.heading}>Select the Time</Text>
                    <Card style={styles.card}>
                        <View style={styles.timeContainer}>
                            <View style={styles.titletime}>
                                <TouchableOpacity style={styles.timeButton} onPress={() => setShowFromPicker(true)}>
                                    <Text style={styles.buttonText}>From</Text>
                                </TouchableOpacity>
                                {showFromPicker && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={fromTime}
                                        mode='time'
                                        is24Hour={true}
                                        display="default"
                                        onChange={(event, selectedDate) => onChangeTime(event, selectedDate, setFromTime)}
                                    />
                                )}
                                <Text style={styles.dateText}>{fromTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                            </View>
                            <Icon name="chevron-right" size={20} color="#000" style={styles.chevron} />
                            <View style={styles.titletime}>
                                <TouchableOpacity style={styles.timeButton} onPress={() => setShowToPicker(true)}>
                                    <Text style={styles.buttonText}>To</Text>
                                </TouchableOpacity>
                                {showToPicker && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={toTime}
                                        mode='time'
                                        is24Hour={true}
                                        display="default"
                                        onChange={(event, selectedDate) => onChangeTime(event, selectedDate, setToTime)}
                                    />
                                )}
                                <Text style={styles.dateText}>{toTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                            </View>
                        </View>
                    </Card>
                </View>

                <Card.Content>
                    <Text style={styles.heading}>Category</Text>
                    <View style={styles.Categorydata}>
                        <CategoryItem category="Meeting" color="orange" backgroundColor="#fffbeb" />
                        <CategoryItem category="Hangout" color="purple" backgroundColor="#fdf4ff" />
                        <CategoryItem category="Cooking" color="red" backgroundColor="#fef2f2" />
                        <CategoryItem category="Other" color="gray" backgroundColor="#f7f7f7" />
                        <CategoryItem category="Weekend" color="green" backgroundColor="#f0fff5" />
                        <Image
                             source={require('../../../../assets/add-circle.png')}
                              contentFit="cover"
                             style={styles.addImage}
                            />
                    </View>
                </Card.Content>

                <Text style={styles.NoteText}>Note</Text>
                <TextInput 
                    style={styles.note}
                    value={description}
                    onChangeText={text => setDescription(text)}
                    multiline
                    numberOfLines={4}
                />
                <TouchableOpacity onPress={() => alert('Schedule Saved!')}>
                    <LinearGradient
                      colors={['#0A8E8A', '#09EFE8']}
                      locations={[0.12, 1]}
                      style={styles.savebutton}
                    >
                        <Text style={styles.saveButtonText}>Save</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const CategoryItem = ({ category, color, backgroundColor }) => {
    return (
        <View style={[styles.categoryContainer, { backgroundColor }]}>
            <View style={[styles.iconContainer, { backgroundColor: color }]}>
                <View style={styles.innerIcon} />
            </View>
            <Text style={styles.categoryText}>{category}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c7f8f6',
    },
    main: {
        margin:5,
        padding: 16,
        borderRadius: 20,
        marginTop:20,
        marginBottom: 80,
        backgroundColor: '#fff',
    },
    title: {
        width: 250,
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    heading: {
        fontSize: 16,
        marginTop: 20,
        fontWeight: '500',
    },
    card: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#F1F5F9', 
        elevation: 0, // Remove shadow for Android
        shadowColor: 'transparent', 
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    titletime: {
        alignItems: 'center',
    },
    dateText: {
        textAlign: 'center',
        marginVertical: 8,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    chevron: {
        marginHorizontal: 10,
    },
    timeButton: {
        backgroundColor: '#F1F5F9', // Light grey background
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#A3A3A3',
    },
    Categorydata: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        padding: 5,
        margin: 10,
        borderRadius: 20,
    },
    iconContainer: {
        width: 10,
        height: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    innerIcon: {
        width: 10,
        height: 10,
        borderRadius: 7.5,
    },
    categoryText: {
        fontSize: 12,
    },
    addImage:{
        width:20,
        height:20,
        marginTop:10,
        overflow:'hidden',
    },
    NoteText: {
        margin: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    note: {
        height: 100,
        borderRadius: 5,
        padding: 1,
        backgroundColor: '#f1f5f9',
    },
    savebutton: {
        backgroundColor: '#c7f8f6', // Soft green or another highlight color
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    saveButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
});
