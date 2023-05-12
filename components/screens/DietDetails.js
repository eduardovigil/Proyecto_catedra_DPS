import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function DietDetails({route}) {
  const navigation = useNavigation();
  const { diet } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{diet.name}</Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <Text style={styles.body}>{diet.ingredients}</Text>
      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text style={styles.body}>{diet.procedure}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    marginBottom: 16,
  },
});
