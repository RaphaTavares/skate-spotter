import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import SpotListScreen from '../Screens/SpotListScreen';
import { StyleSheet } from 'react-native';
import SignupScreen from "../Screens/SignupScreen";

import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName={"SpotList"}>
            
            <Stack.Screen name="SpotList" component={SpotListScreen} options={{header: () => null}} />

            <Stack.Screen name="Login" component={LoginScreen} options={{header: () => null}} />

            <Stack.Screen name="Signup" component={SignupScreen} options={({navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f9fafd',
                shadowColor: '#f9fafd',
                elevation: 0,
              },
              headerLeft: () => (
                <View style={marginLeft= 10}>
                  <FontAwesome.Button 
                    name="long-arrow-left"
                    size={25}
                    backgroundColor="#f9fafd"
                    color="#333"
                    onPress={() => navigation.navigate('Login')}
                  />
                </View>
              ),
            })} />
        </Stack.Navigator>
      );
      
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });