import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

export default function Exer({route}) {
  const navigation = useNavigation();
  const { exercise } = route.params; 
  console.log(exercise); // Esto debería imprimir la información del ejercicio seleccionado

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ejercicios</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttonContainer}
                     onPress={() => navigation.navigate('ExerList', { place: "home", exercise })}>

          <Icon name="home" size={50} color="#cb2821" />
          <Text style={styles.buttonText}>Casa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
                     onPress={() => navigation.navigate('ExerList', { place: "gym", exercise  })}>

          <Icon name="weight-lifter" size={50} color="#cb2821" />
          <Text style={styles.buttonText}>Gym</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 100,
    height: 120,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});