import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import { useContext } from 'react/cjs/react.production.min';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { useFonts } from 'expo-font';

//Lato-Regular

export default SignupScreen = ({navigation}) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleSignup = () => {
      // Fetch
      const url = 'http://192.168.1.108:3000/signup'
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          lastname: lastName,
          firstname: firstName,
          username: userName,
          email: email,
          password: password,
          isadmin: true
        })
      };

      console.log("chegou aqui");
      fetch(url, options)
        .then( request => {
          if(request.status == 200){
            alert("Você foi cadastrado");
            navigation.navigate('Login');
          }
          else if(request.status == 400){
            alert("Não foi possivel cadastrar");
          }
        })
        .catch(e =>{
          console.log(e.message)
        })
    };
    
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Create an account</Text>
    
          <FormInput
            labelValue={firstName}
            onChangeText={(userfirstName) => setFirstName(userfirstName)}
            placeholderText="firstName"
            iconType="user"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />
    
          <FormInput
            labelValue={lastName}
            onChangeText={(userlastName) => setLastName(userlastName)}
            placeholderText="lastName"
            iconType="user"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />
    
          <FormInput
            labelValue={userName}
            onChangeText={(useruserName) => setUserName(useruserName)}
            placeholderText="userName"
            iconType="user"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />
    
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
            buttonTitle="Sign Up"
            onPress={() => handleSignup({firstName, lastName, userName, email, password})}
          />
    
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By registering, you confirm that you accept our{' '}
            </Text>
            <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
              <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                Terms of service
              </Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}> and </Text>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Privacy Policy
            </Text>
          </View>
            <View>
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
            </View>
          
    
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navButtonText}>Have an account? Sign In</Text>
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
        color: 'grey',
      },
  });