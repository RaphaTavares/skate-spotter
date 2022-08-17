import React, { useEffect, Fragment, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Pin from '../utils/Pin';
import Spots from '../components/Spots';
import { FlatList } from 'react-native-gesture-handler';

export default SpotListScreen = ({navigation}) => {
    const [location, setLocation] = useState();
    const [errorMsg, setErrorMsg] = useState(null);
    const [spots, setSpots] = useState(null);

    
    //enableLatestRenderer();
    useEffect(() => {
      (async () =>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted'){
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
        setLocation(location);
        
        const url = 'http://192.168.100.6:3000/spot/getAll'
        const options = {
          method: 'GET'
        }
  
        fetch(url, options)
          .then( (response) => response.json() )
          .then( data => setSpots(data) )
          .catch( (error) => {console.log(error)})
      })();


    }, []);



    if(errorMsg){
      return (
        <Text>{errorMsg}</Text>
      )
    }
    else if(location){
      //console.table(location);
      console.log(spots);
      return (
        <View style={styles.container}>
          <MapView 
            style={styles.map}
            region={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            showsUserLocation>
          
          {
             spots && spots.map((spot)=>{
             console.log("printado dentro dos pins "+spot.name);
             return(
                <Marker key={spot.id} coordinate={{latitude: parseFloat(spot.latitude), longitude: parseFloat(spot.longitude)}}><Pin aviso={spot.id} corFundo='red'/>
                </Marker>
                );
              })
           } 
            
            </MapView>
            

            <FlatList
              data={spots}
              renderItem={({item}) => (<Spots spot={item}/>)}
            />

            <Text>Hello world</Text>
        </View>
      )
    }
    else{
      return (
        <Text>
          NOTHING
        </Text>
      )
    }
  }

    // useEffect(()=>{
    //     const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    //     useGeolocated({
    //         positionOptions: {
    //             enableHighAccuracy: false,
    //         },
    //         userDecisionTimeout: 5000,
    //     });
    //     setCoords(coords);
    //     setIsGeolocationAvailable(isGeolocationAvailable);
    //     setIsGeolocationEnabled(isGeolocationEnabled);
    //   }, []);

//       if (!isGeolocationAvailable) {
//         return (
//           <Text>Seu browser não suporta geolocalização</Text>
//         )
//       } else if (!isGeolocationEnabled) {
//         return (
//         <Text>Geolocation não habilitada</Text>)
//       } else if (coords) {
//             <Text>Hello World</Text>,
//             <MapView 
//             style={styles.map}
//             region={{
//                 latitude: coords.latitude,
//                 longitude: coords.longitude,
//                 latitudeDelta: 0.015,
//                 longitudeDelta: 0.0121,
//             }}
//             >
//             <Marker
//         coordinate={{
//             latitude: coords.latitude,
//             longitude: coords.longitude,
//         }}
//         title="Test"
//         description="This is the test description"
//         />
//             </MapView>
// };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 50
    },
    text: {
      fontSize: 50,
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
        width: '100%',
        height: 300,
      },
    });