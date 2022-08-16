import React, { useEffect, Fragment, useState } from 'react';
import { StyleSheet, Text, _View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useGeolocated } from "react-geolocated";

export default SpotListScreen = ({navigation}) => {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [location, setLocation] = useState(false);
    const [coords, setCoords] = useState();
    const [isGeolocationAvailable, setIsGeolocationAvailable] = useState(false);
    const [isGeolocationEnabled, setIsGeolocationEnabled] = useState(false);


    useEffect(()=>{
        const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
        setCoords(coords);
        setIsGeolocationAvailable(isGeolocationAvailable);
        setIsGeolocationEnabled(isGeolocationEnabled);
      }, []);

      if (!isGeolocationAvailable) {
        return (
          <Text>Seu browser não suporta geolocalização</Text>
        )
      } else if (!isGeolocationEnabled) {
        return (
        <Text>Geolocation não habilitada</Text>)
      } else if (coords) {
            <Text>Hello World</Text>,
            <MapView 
            style={styles.map}
            region={{
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            >
            <Marker
        coordinate={{
            latitude: coords.latitude,
            longitude: coords.longitude,
        }}
        title="Test"
        description="This is the test description"
        />
            </MapView>
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
      map: {
        width: 400,
        height: 400,
      },
    });
}