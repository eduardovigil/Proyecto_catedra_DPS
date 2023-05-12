import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

export default function Diet() {
  const navigation = useNavigation();

//onPress={() => navigation.navigate('ExerList', { place: "home", exercise })}>
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comidas y dietas</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('DietRecipes', { type: "vegetable",})}>
          <Icon name="carrot" size={50} color="#cb2821" />
          <Text style={styles.buttonText}>Verduras</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('DietRecipes', { type: "fruit",})}>
          <Icon name="food-apple" size={50} color="#cb2821" />
          <Text style={styles.buttonText}>Frutas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('DietRecipes', { type: "grain",})}>
          <Icon name="corn" size={50} color="#cb2821" />
          <Text style={styles.buttonText}>Granos integrales</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('DietRecipes', { type: "oil",})}>
          <Icon name="oil" size={50} color="#cb2821" />
          <Text style={styles.buttonText}>Aceites</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
                    onPress={() => navigation.navigate('DietRecipes', { type: "lact",})}>
          <Icon name="cow" size={50} color="#cb2821" />
          <Text style={styles.buttonText}>Lácteos</Text>
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
