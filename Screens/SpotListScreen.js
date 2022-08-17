import React, { useEffect, Fragment, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Pin from '../utils/Pin';
import Spots from '../components/Spots';
import { FlatList } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker'; 
import Navbar from '../navigation/navbar';

export default SpotListScreen = ({navigation}) => {
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
        
        const url = 'http://192.168.100.6:3000/spot/getAll'
        const options = {
          method: 'GET'
        }
  
        fetch(url, options)
          .then( (response) => response.json() )
          .then( data => setSpots(data.filter(spot => spot.status == 'approved')) )
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
          <Navbar />
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
             spots && filteredspots.map((spot)=>{
             //console.log("printado dentro dos pins "+spot.name);
             return(
                <Marker key={spot.id} coordinate={{latitude: parseFloat(spot.latitude), longitude: parseFloat(spot.longitude)}}><Pin aviso={spot.id} corFundo='red'/>
                </Marker>
                );
              })
           } 
            
            </MapView>
            
            <View style={styles}>
              <Picker selectedValue={pick} onValueChange={(item, index) => setPick(item)}>
                <Picker.Item label='Nenhum filtro' value=''/>
                { spottypes && spottypes.map(spottype => {
                  return (
                    <Picker.Item label={spottype} value={spottype}/>
                  )
                }) }
              </Picker>
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