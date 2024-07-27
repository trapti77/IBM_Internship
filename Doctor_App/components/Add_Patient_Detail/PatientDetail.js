import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton, List } from 'react-native-paper';
import {
  validateName,
  validateMobile,
  validateAge,
  validateGender,
  validateDiabetes,
  validateBp,
} from './Validation';
import { ScrollView } from 'react-native';

export default function AddPatient() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [diabetes, setDiabetes] = useState('');
  const [bp, setBp] = useState('');
  const [pulse, setPulse] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    // Reset errors
    setErrors({});

    // Validate each field
    const nameError = validateName(name);
    const mobileError = validateMobile(mobile);
    const ageError = validateAge(age);
    const genderError = validateGender(gender);
    const diabetesError = validateDiabetes(diabetes);
    const bpError = validateBp(bp);

    // Collect all errors
    const newErrors = {
      name: nameError,
      mobile: mobileError,
      age: ageError,
      gender: genderError,
      diabetes: diabetesError,
      bp: bpError,
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
      <View style={styles.headerview}>
    <Text style={styles.header}>Patient Details</Text>
    </View>
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
          {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
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
        <View style={styles.row}>
        <View style={styles.formGroup}>
          <Text style={styles.text} >BP</Text>
          <TextInput
            style={[styles.smallInput, errors.age ? styles.errorBorder : null]}
            value={bp}
            onChangeText={setBp}
            keyboardType="numeric"
          />
          {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.text} >Pulse</Text>
          <TextInput
            style={[styles.smallInput, errors.age ? styles.errorBorder : null]}
            value={pulse}
            onChangeText={setPulse}
            keyboardType="numeric"
          />
          {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
        </View>
        </View>
          </RadioButton.Group>
          {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
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
          {errors.diabetes && <Text style={styles.errorText}>{errors.diabetes}</Text>}
        </View>
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
          {errors.bp && <Text style={styles.errorText}>{errors.bp}</Text>}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.text} >Description (Optional)</Text>
          <TextInput
            style={[styles.descriptionInput, errors.name ? styles.errorBorder : null]}
            value={description}
            onChangeText={setDescription}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>
        <Button title="Save" onPress={handleSubmit} style={styles.saveButton}/>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Take up full screen height
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#c7f8f6', // Optional: background color for the wrapper
  },
  container: {
    width: '95%', // Width of the form container
    padding: 20,
    backgroundColor: 'white', // Background color of the form
    shadowColor: '#000', // Optional: shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    borderRadius:10,
    marginBottom:80,
  },
  headerview:{
    marginRight:'65%',
  },
  header: {
    fontSize:16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:10,
    padding:1,
    width:120,
    borderRadius:50,
    textAlign: 'center',
    backgroundColor:'aqua' // Center the header text
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
    width:50,
    backgroundColor:'red',
  },
});
