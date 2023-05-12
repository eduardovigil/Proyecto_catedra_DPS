import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DietRecipes from '../screens/DietRecipes'
import DietDetails from '../screens/DietDetails'
import Diet from '../screens/Diet'

export default function DetailsNavigation() {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
     <Stack.Screen name='Diet' component={Diet} options={{headerShown: false}}/>
      <Stack.Screen name='DietRecipes' component={DietRecipes} options={{title: "Recetas"}}/>
      <Stack.Screen name='DietDetails' component={DietDetails} options={{title: "Detalles"}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 
 
});