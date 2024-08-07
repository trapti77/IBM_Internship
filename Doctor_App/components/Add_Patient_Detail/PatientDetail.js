import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import FilterButton from '../FilterButton/FilterButton';
import {
  validateName,
  validateMobile,
  validateAge,
  validateGender,
  validateDiabetes,
  validateBp,
  validateBP,
  validatePulse,
  validateWeight, // Assuming this exists for weight validation
} from './Validation';

export default function AddPatient() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [diabetes, setDiabetes] = useState('');
  const [bp, setBp] = useState('');
  const [BP, setBP] = useState('');
  const [pulse, setPulse] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [filterVisible, setFilterVisible] = useState(false);

  const handleSubmit = () => {
    // Reset errors
    setErrors({});

    // Validate each field
    const nameError = validateName(name);
    const mobileError = validateMobile(mobile);
    const ageError = validateAge(age);
    const weightError = validateWeight(weight); // Added weight validation
    const genderError = validateGender(gender);
    const diabetesError = validateDiabetes(diabetes);
    const bpError = validateBp(bp);
    const BPError = validateBp(BP);
    const pulseError = validatePulse(pulse); // Corrected to validatePulse

    // Collect all errors
    const newErrors = {
      name: nameError,
      mobile: mobileError,
      age: ageError,
      weight: weightError,
      gender: genderError,
      diabetes: diabetesError,
      bp: bpError,
      BP: BPError,
      pulse: pulseError,
    };

    // Check if any errors exist
    const formIsValid = Object.values(newErrors).every((error) => error === null);
    setErrors(newErrors);

    if (formIsValid) {
      // Handle successful form submission
      console.log('Form submitted successfully:', { name, mobile, age, gender, diabetes, bp });
    }
  };

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.wrapper}>
          <View style={styles.headerContainer}>
          <View style={styles.filterButtonContainer}>
              <FilterButton onPress={() => setFilterVisible(!filterVisible)} />
            </View>
          </View>

          {filterVisible && (
            <View style={styles.filterContainer}>
              <Text>Filter options go here</Text>
            </View>
          )}
        <Text style={styles.header}>Patient Details</Text>
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.text}>Patient Name</Text>
          <TextInput
            style={[styles.input, errors.name ? styles.errorBorder : null]}
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.text}>Mobile No.</Text>
          <TextInput
            style={[styles.input, errors.mobile ? styles.errorBorder : null]}
            value={mobile}
            onChangeText={setMobile}
            keyboardType="numeric"
          />
          {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}
        </View>
        <View style={styles.row}>
        <View style={styles.formGroup}>
          <Text style={styles.text} >Age</Text>
          <TextInput
            style={[styles.smallInput, errors.age ? styles.errorBorder : null]}
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
          {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.text} >Weight</Text>
          <TextInput
            style={[styles.smallInput, errors.age ? styles.errorBorder : null]}
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />
          {errors.weight && <Text style={styles.errorText}>{errors.weight}</Text>}
        </View>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.text} >Gender</Text>
          <RadioButton.Group onValueChange={value => setGender(value)} value={gender}>
            <View style={styles.radioGroup}>
              <View style={styles.radioButtonContainer}>
                <RadioButton.Item label="Male" value="male" />
              </View>
              <View style={styles.radioButtonContainer}>
                <RadioButton.Item label="Female" value="female" />
              </View>
              <View style={styles.radioButtonContainer}>
                <RadioButton.Item label="Other" value="other" />
              </View>
            </View>
            {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
        <View style={styles.row}>
        <View style={styles.formGroup}>
          <Text style={styles.text} >BP</Text>
          <TextInput
            style={[styles.smallInput, errors.BP ? styles.errorBorder : null]}
            value={BP}
            onChangeText={setBP}
            keyboardType="numeric"
          />
          {errors.BP && <Text style={styles.errorText}>{errors.BP}</Text>}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.text} >Pulse</Text>
          <TextInput
            style={[styles.smallInput, errors.age ? styles.errorBorder : null]}
            value={pulse}
            onChangeText={setPulse}
            keyboardType="numeric"
          />
          {errors.pulse && <Text style={styles.errorText}>{errors.pulse}</Text>}
        </View>
        </View>
          </RadioButton.Group>
        </View>
        <View style={styles.formGrouprow}>
          <Text style={styles.text} >Sugar</Text>
          <Picker
            selectedValue={diabetes}
            onValueChange={(itemValue) => setDiabetes(itemValue)}
            style={[styles.picker, errors.diabetes ? styles.errorBorder : null]}
          >
            <Picker.Item label="Select Diabetes Status" value="" />
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
          </Picker>
        </View>
        {errors.diabetes && <Text style={styles.errorText}>{errors.diabetes}</Text>}
        <View style={styles.formGrouprow}>
          <Text style={styles.text} >BP</Text>
          <Picker
            selectedValue={bp}
            onValueChange={(itemValue) => setBp(itemValue)}
            style={[styles.picker, errors.bp ? styles.errorBorder : null]}
          >
            <Picker.Item label="Select BP Status" value="" />
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
          </Picker>
        </View>
        {errors.bp && <Text style={styles.errorText}>{errors.bp}</Text>}
        <View style={styles.formGroup}>
          <Text style={styles.text} >Description (Optional)</Text>
          <TextInput
            style={[styles.descriptionInput, errors.name ? styles.errorBorder : null]}
            value={description}
            onChangeText={setDescription}
          />
        
        </View>
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.saveButton}>
      <Text style={styles.ButtonText}>Save</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,  
    alignItems: 'center', 
    backgroundColor: '#c7f8f6', 
  },
  headerContainer: {
    alignSelf:'flex-end',
    flexDirection: 'row',
    margin:5,
    justifyContent: 'space-between',
  },
  header: {
    alignSelf:'flex-start',
    fontSize: 16,
    padding: 1,
    width: 120,
    marginBottom:5,
    marginLeft:10,
    borderRadius: 50,
    textAlign: 'center',
    color:'#fff',
    backgroundColor: '#0A8E8A',
  },
  filterContainer: {
    width: '95%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  container: {
    width: '95%',
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 20,
  },
  text:{
    fontSize:17,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  formGroup: {
    marginBottom:10,
  },
  formGrouprow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  radioGroup: {
    flexDirection: 'row', // Arrange radio buttons in a row
    justifyContent: 'space-around', // Space out radio buttons evenly
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 4, // Optional: rounded corners for inputs
  },
  descriptionInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 4, // Optional: rounded corners for inputs
  },
  mediumInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    width: 120, // Adjust the width as needed
    borderRadius: 4, // Optional: rounded corners for inputs
  },
  smallInput: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    width: 90, // Adjust the width as needed
    borderRadius: 4, // Optional: rounded corners for inputs
  },
  picker: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width:150,
    borderRadius: 4, // Optional: rounded corners for pickers
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  errorBorder: {
    borderColor: 'red',
  },
  saveButton:{
    width:150,
    padding:10,
    borderRadius:50,
    backgroundColor:'#0A8E8A',
    marginBottom:70,
  },
  ButtonText:{
    textAlign:'center',
    fontSize:20,
    color:'#fff',
  }
});
