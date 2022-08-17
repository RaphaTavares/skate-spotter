import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default Spots = ( spot) => {
    spotname = String(spot.spot.name);
    spotdesc = String(spot.spot.description);
    
    console.log("COMPONETE", spot.spot.name)

    const navigation = useNavigation()
    
    const handleSelectedItem = (id) => {
        navigation.navigate('SpotDetails',{id})
    }

    return (
        <TouchableOpacity onPress={() => handleSelectedItem(spot.spot.id)}><Text>({spot.spot.id}) {spotname}: {spotdesc} | {spot.spot.spottype}
        </Text></TouchableOpacity>
    )
}