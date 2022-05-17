import React from 'react';
import { Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default FormButton = ({buttonTitle, ...rest}) => {
  return(
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
        <Text style={styles.buttonText}> {buttonTitle} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
    height: Dimensions.get('window').height / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});