import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight } from '../utils/Dimentions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default SocialButton = ({buttonTitle, btnType, color, backgroundColor,  ...rest}) => {
  return(
      <TouchableOpacity style={styles.buttonContainer, {backgroundColor: backgroundColor}} {...rest}>
        <View style={styles.iconWrapper}>
            <FontAwesome name={btnType} size={22} color={color} />
        </View>
        <View style={styles.btnTxtWrapper}>
        <Text style={styles.buttonText, {color: color}}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '10%',
      height: '10%',
      padding: 10,
      flexDirection: 'row',
      borderRadius: 3,
    },
    iconWrapper: {
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontWeight: 'bold',
    },
    btnTxtWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'Lato-Regular',
    },
  });