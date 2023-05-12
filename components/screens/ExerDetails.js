import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ExerDetails({route}) {
  const navigation = useNavigation();

  const { exer } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exer.name}</Text>
      <Text style={styles.text}>{exer.series}</Text>
      <Text style={styles.text}>{exer.reps}</Text>
      <Image source={{uri:exer.image}} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
  },
});
