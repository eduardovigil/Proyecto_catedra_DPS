import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import firebase from '../database/firebase';
import { useNavigation } from '@react-navigation/native';


export default function DietRecipes({route}) {
    const navigation = useNavigation();
    const { type } = route.params; 

  const [diets, setDiets] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.db.collection('diets').onSnapshot((snapshot) => {
      const newDiets = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDiets(newDiets);
    });

    return unsubscribe;
  }, []);



   return (
  <ScrollView contentContainerStyle={styles.container}>
    {diets.map((diet) => {
      if (type === diet.kind) {
        return (
          <View key={diet.id} style={styles.dietContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{diet.name}</Text>
              <Text style={styles.reasonText}>{diet.reason}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("DietDetails", { diet: diet })
              }
            >
              <Text style={styles.buttonText}>Descubrir</Text>
            </TouchableOpacity>
          </View>
        );
      } else {
        return null;
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
