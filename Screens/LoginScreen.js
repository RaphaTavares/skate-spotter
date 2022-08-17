import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { useFonts } from 'expo-font';
export default LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
  
    const handleLogin = () => {
      // Fetch
      const url = 'http://192.168.100.6:3000/login'
      const options = {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": email,
          "password": password
        })
      };
      console.log("run")

      console.log(JSON.stringify(options))


      fetch(url, options)
        .then( (response) => response.json())
        .then( (json) => {console.log(json)})
        .catch( (error) => {
          console.log(error.message)
        })
      };
    
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/skateboard.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Skate Spotter</Text>
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

        <FormButton
            buttonTitle="Sign In"
            onPress={() => handleLogin()}
        />

        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>


        <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
        />

        <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
        />

        <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.navButtonText}>Don't have an account? Create here!</Text>
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
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
  });