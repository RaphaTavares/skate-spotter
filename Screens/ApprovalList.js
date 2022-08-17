import React, { useEffect, Fragment, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Pin from '../utils/Pin';
import Spots from '../components/Spots';
import { FlatList } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker'; 

export default ApprovalList = ({navigation}) => {
    const [location, setLocation] = useState();
    const [errorMsg, setErrorMsg] = useState(null);
    const [spots, setSpots] = useState(null);
    const [pick, setPick] = useState();

    const spottypes = spots?.map(spot => spot.spottype);
    const filteredspots = !pick ? spots : spots.filter(spot => spot.spottype==pick);
    
    console.log('Filtrados:',filteredspots);

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
        
        const url = 'http://192.168.1.108:3000/spot/getAll'
        const options = {
          method: 'GET'
        }
  
        fetch(url, options)
          .then( (response) => response.json() )
          .then( data => setSpots(data.filter(spot => spot.status != 'approved')) )
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
      //console.log(spots);
      console.log("Filtro: "+pick)
      return (
        <View style={styles.container}>            
            <View style={styles}>
              {pick != undefined && <Picker selectedValue={pick} onValueChange={(item, index) => setPick(item)}>
                <Picker.Item label='Nenhum filtro' value=''/>
                {spottypes && spottypes.map(spottype => {
                  return (
                    <Picker.Item label={spottype} value={spottype}/>
                  )
                }) }
              </Picker>}
              <FlatList
                data={filteredspots}
                renderItem={({item}) => (<Spots spot={item}/>)}
              />
            </View>
        </View>
      )
    }
    else{
      return (<View></View>)
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