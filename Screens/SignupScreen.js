import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

export default SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>
            <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        />

        <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
        />
        
        <FormInput
            labelValue={confirmPassword}
            onChangeText={(userPassword) => setConfirmPassword(userPassword)}
            placeholderText="Confirm Password"
            iconType="lock"
            secureTextEntry={true}
        />

        <FormButton
            buttonTitle="Sign Un"
            onPress={() => alert('Sign Un Clicked!')}
        />

        <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our </Text>
            <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                <Text style={styles.color_textPrivate, {color: '#e88832'}}>Terms of service</Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}> and </Text>
            <TouchableOpacity style={styles.color_textPrivate, {color: '#e88832'}}>Privacy Policy</TouchableOpacity>
        </View>

        <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
        />

        <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
        />

        <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Login')}>
                <Text>Have an account? Sign in</Text>

        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
      },
  });