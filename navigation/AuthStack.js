import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import { StyleSheet } from 'react-native';
//import SignupScreen from "../SignupScreen";

const Stack = createStackNavigator();

let routeName = "Login";

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen name="Login" component={LoginScreen} options={{header: () => null}} />
            {
            //<Stack.Screen name="Signup" component={SignupScreen} />
            }
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