import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import firebase from '../database/firebase';
import { useNavigation } from '@react-navigation/native';


export default function ExerList({route}) {
    const navigation = useNavigation();

  const [exers, setExers] = useState([]);
    const { place } = route.params; 
      const { exercise } = route.params; 
  console.log(exercise); // Esto debería imprimir la información del ejercicio seleccionado



  useEffect(() => {
    const unsubscribe = firebase.db.collection('exers').onSnapshot((snapshot) => {
      const newExers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExers(newExers);
    });

    return unsubscribe;
  }, []);



   return (
  <ScrollView contentContainerStyle={styles.container}>
    {exers.map((exer) => {
      if (place === exer.place && exercise === exer.type) {
        return (
          <View key={exer.id} style={styles.dietContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{exer.name}</Text>
              <Text style={styles.reasonText}>{exer.series}</Text>
              <Text style={styles.reasonText}>{exer.reps}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ExerDetails", { exer: exer })}>
              <Text style={styles.buttonText}>Como hacer</Text>
            </TouchableOpacity>
          </View>
        );
      }
    })}
  </ScrollView>
);

};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dietContainer: {
    flexDirection: 'column',
    marginBottom: 16,
    backgroundColor: '#DEAAAA',
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    padding: 16,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reasonText: {
    fontSize: 16,
  },
  button: {
    padding: 16,
    backgroundColor: '#cb2821',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
