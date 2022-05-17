import { NavigationContainer } from "@react-navigation/native"
import AuthStack from "./AuthStack";
import auth from '@react-native-firebase/auth';
import React from 'react';
import { useEffect } from "react/cjs/react.production.min";

export default Routes = () => {

  return (
      <NavigationContainer>
          <AuthStack/>
      </NavigationContainer>
  );
};