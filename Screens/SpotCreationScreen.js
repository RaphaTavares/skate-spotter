import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useContext } from 'react/cjs/react.production.min';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { useFonts } from 'expo-font';

//Lato-Regular

export default SpotCreation = ({ navigation }) => {
  const [userid, setUserId] = useState(1);
  const [zip, setZip] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [spottype, setSpottype] = useState();
  const [status, setStatus] = useState('not approved');

  const handleCreateSpot = () => {
    const url = 'http://localhost:3000/spot/createSpot'
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({userid: userid,
        zip: zip,
        latitude: latitude,
        longitude: longitude,
        name: name,
        description: description,
        spottype: spottype,
        status: status
        })
    };

    fetch(url, options)
      .then(response => { return response.json() })
      .then(data => console.log(data))
      .catch()

  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create a spot</Text>

      <FormInput
        labelValue={name}
        onChangeText={(name) => setName(name)}
        placeholderText="name"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={description}
        onChangeText={(description) => setDescription(description)}
        placeholderText="description"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={spottype}
        onChangeText={(spottype) => setSpottype(spottype)}
        placeholderText="spottype"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={latitude}
        onChangeText={(latitude) => setLatitude(latitude)}
        placeholderText="latitude"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={longitude}
        onChangeText={(longitude) => setLongitude(longitude)}
        placeholderText="longitude"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={zip}
        onChangeText={(zip) => setZip(zip)}
        placeholderText="zip"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormButton
        buttonTitle="Send for Approval"
        onPress={() => handleCreateSpot(userid,
          zip, latitude, longitude, name, description,
          spottype, status, createdAt, updatedAt)}
      />
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