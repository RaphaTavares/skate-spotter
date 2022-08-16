import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { useFonts } from 'expo-font';
import { enableLatestRenderer } from "react-native-maps";

export default ListSpotsScreen = ({navigation}) => {

    const [spots, setSpots] = useState();

    useEffect(() => {
        const url = 'http://192.168.15.14:3000/spot/GetAll'
      const options = {
        method: 'GET',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
      };

      fetch(url, options)
        .then( (response) => {
            response.json();
        })
        .then((data) => {
            setSpots(data);
        })
        .catch( (error) => {
          console.log(error.message)
        });
    }, [])

    const handleSpots = () => {
      // Fetch
      
    
    return (
                
        <View style={styles.container}>
            <Text>
                {spots[0].name}
            </Text>
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
  })
};