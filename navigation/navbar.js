import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default NavBar = ({}) => {

    const navigation = useNavigation()
    return (
    <View>
        <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('SpotCreation')}>
            <Text style={styles.navButtonText}>Create Spot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('ApprovalList')}>
            <Text style={styles.navButtonText}>Approval List</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        marginBottom: 10,
        color: '#051d5f',
    }
})