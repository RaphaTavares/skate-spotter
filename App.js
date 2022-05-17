import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Providers from './navigation';

const AppStack = createStackNavigator();

export default function App() {

  return <Providers />;
  
}


