import { NavigationContainer } from "@react-navigation/native"
import AuthStack from "./AuthStack";
import { AuthContext } from "./AuthProvider.android"; 
import auth from '@react-native-firebase/auth';
import React from 'react';
import { useEffect } from "react/cjs/react.production.min";

export default Routes = () => {

  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if(initializing) return null;

  return (
      <NavigationContainer>
          { user ? <AppStack/> : <AuthStack/>}
      </NavigationContainer>
  );
};