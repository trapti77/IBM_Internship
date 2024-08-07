// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const GLOBAL_COLOR = '#0A8E8A'; // Define your global color

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused
    const [passwordVisible, setPasswordVisible] = useState(false); // Track password visibility

    const handleLogin = () => {
        // Logic for login
        Alert.alert('Login', 'Login button pressed');
    };

    const handleResetPassword = () => {
        // Logic for password reset
        Alert.alert('Reset Password', 'Reset password link sent');
    };

    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    const handleBlur = () => {
        setFocusedInput(null);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <KeyboardAvoidingView 
            style={styles.wrapper} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.title}>Login To YOURLAB</Text>
                    <View style={styles.formGroup}>
                        <Text style={styles.text}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            onFocus={() => handleFocus('email')}
                            onBlur={handleBlur}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.text}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                onFocus={() => handleFocus('password')}
                                onBlur={handleBlur}
                                secureTextEntry={!passwordVisible}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                                <Icon name={passwordVisible ? 'visibility' : 'visibility-off'} size={24} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleResetPassword}>
                        <Text style={styles.link}>Reset Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: focusedInput ? '#0A8E8A' : GLOBAL_COLOR }]} // Button color changes based on input focus
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#c7f8f6',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        width: '95%', // Width of the form container
        padding: 20,
        backgroundColor: '#fff', // Background color of the form
        shadowColor: '#000', // Optional: shadow effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
        borderRadius: 10,
        margin: 10,
        marginTop: 100,
        marginBottom: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 15,
        marginLeft: 10,
    },
    input: {
        height: 50,
        borderColor: '#c7f8f6',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 16,
        marginTop: 5,
        marginBottom: 16,
        shadowColor: '#c7f8f6',
        flex: 1,
    },
    button: {
        padding: 16,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: 'red',
        textAlign: 'right',
        marginBottom: 10,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
    },
});

export default LoginScreen;
