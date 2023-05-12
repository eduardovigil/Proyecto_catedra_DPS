import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Exer from '../screens/Exer'
import ExerList from '../screens/ExerList'
import ExerDetails from '../screens/ExerDetails'

export default function ExerNavigation({exercise}) {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
     <Stack.Screen name='Exer' component={Exer} options={{headerShown: false}} initialParams={{ exercise }}/>
      <Stack.Screen name='ExerList' component={ExerList} options={{title: "Ejercicios"}}/>
      <Stack.Screen name='ExerDetails' component={ExerDetails} options={{title: "Detalles"}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 
 
});