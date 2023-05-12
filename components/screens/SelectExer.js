import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function SelectExer() {
    const navigation = useNavigation();
    
    const [selectedExercise, setselectedExercise] = useState(null);
    
   const handleSelectExercise = (exercise, showDiets) => {
    setselectedExercise(exercise);
    navigation.navigate("Home", { showDiets, exercise}); 
  };

const [selectedDiet, setSelectedDiet] = useState(null);

const handleSelectDiet = (diet) => {
    setSelectedDiet(diet);
};

  return (
        <View style={styles.container}>
      <Text style={styles.text}>¿Qué deseas ejercitar?</Text>
      <View style={styles.buttonGroup}>
      {/*Boton de Todo el cuerpo*/}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[
    styles.objectiveButton, 
    selectedExercise === "body" ? styles.selectedExerciseButton : null
  ]} 
  onPress={() => handleSelectExercise("body", false)}>
              <Text style={[
    styles.objectiveButtonText, 
    selectedExercise === "body" ? styles.selectedExerciseButtonText : null
  ]}>TODO EL CUERPO</Text>
          </TouchableOpacity>
        </View>

        {/*Boton de brazo*/}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[
    styles.objectiveButton, 
    selectedExercise === "arm" ? styles.selectedExerciseButton : null
  ]} 
 onPress={() => handleSelectExercise("arm", false)}>
              <Text style={[
    styles.objectiveButtonText, 
    selectedExercise === "arm" ? styles.selectedExerciseButtonText : null
  ]}>BRAZO</Text>
   
          </TouchableOpacity>
        </View>

        {/*Boton de pecho*/}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[
    styles.objectiveButton, 
    selectedExercise === "chest" ? styles.selectedExerciseButton : null
  ]} 
  onPress={() => handleSelectExercise("chest", false)}>
              <Text style={[
    styles.objectiveButtonText, 
    selectedExercise === "chest" ? styles.selectedExerciseButtonText : null
  ]}>PECHO</Text>
          </TouchableOpacity>
        </View>

      {/*Boton de abdomianles*/}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[
    styles.objectiveButton, 
    selectedExercise === "crunch" ? styles.selectedExerciseButton : null
  ]} 
  onPress={() => handleSelectExercise("crunch", false)}
          >
              <Text style={[
    styles.objectiveButtonText, 
    selectedExercise === "crunch" ? styles.selectedExerciseButtonText : null
  ]}>ABDOMINALES</Text>
          </TouchableOpacity>
        </View>

        {/*Boton de pierna*/}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[
    styles.objectiveButton, 
    selectedExercise === "leg" ? styles.selectedExerciseButton : null
  ]} 
  onPress={() => handleSelectExercise("leg", false)}
          >
              <Text style={[
    styles.objectiveButtonText, 
    selectedExercise === "leg" ? styles.selectedExerciseButtonText : null
  ]}>PIERNAS</Text>

          </TouchableOpacity>
        </View>
                {/*Boton de pierna*/}

                <View style={styles.buttonContainer}>
          <TouchableOpacity style={[
    styles.objectiveButton, 
    selectedExercise === "diet" ? styles.selectedExerciseButton : null
  ]} 
  onPress={() => handleSelectExercise("diet", true)}
          >
              <Text style={[
    styles.objectiveButtonText, 
    selectedExercise === "diet" ? styles.selectedExerciseButtonText : null
  ]}>DIETAS</Text>

          </TouchableOpacity>
        </View>
      </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  buttonGroup: {
    flexDirection: "column",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  objectiveButton: {
    width: 160,
    borderWidth: 1,
    borderColor: "#FF5733",
    color: "black",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  objectiveButtonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
  },
  selectedExerciseButton: {
  backgroundColor: "#FF5733",
},
selectedExerciseButtonText: {
  color: "#fff",
},

});