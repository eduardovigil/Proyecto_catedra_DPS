import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function SelectDiet() {
    const navigation = useNavigation();

    const [selectedObjective, setSelectedObjective] = useState(null);

    const handleSelectObjective = (objective) => {
        setSelectedObjective(objective);
        navigation.navigate("SelectExer");
    };

    const [selectedDiet, setSelectedDiet] = useState(null);

   const handleSelectDiet = (diet) => {
    setSelectedDiet(diet);
   };


    return (
        <View style={styles.container}>
            <Text style={styles.text}>¿Qué deseas?</Text>
            <View style={styles.buttonGroup}>
                {/*Boton de PERDER*/}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[
                        styles.objectiveButton, 
                        selectedObjective === "lose" ? styles.selectedObjectiveButton : null
                    ]} 
                    onPress={() => handleSelectObjective("lose")}>
                        <Text style={[
                            styles.objectiveButtonText, 
                            selectedObjective === "lose" ? styles.selectedObjectiveButtonText : null
                        ]}>PERDER</Text>
                        <Text style={[
                            styles.objectiveButtonText, 
                            selectedObjective === "lose" ? styles.selectedObjectiveButtonText : null
                        ]}>Peso</Text>
                    </TouchableOpacity>
                    <Icon name="arrow-down-circle" size={110} color="#0066cc" />
                </View>

                {/*Boton de AUMENTAR*/}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[
                        styles.objectiveButton, 
                        selectedObjective === "increase" ? styles.selectedObjectiveButton : null
                    ]} 
                    onPress={() => handleSelectObjective("increase")}>
                        <Text style={[
                            styles.objectiveButtonText, 
                            selectedObjective === "increase" ? styles.selectedObjectiveButtonText : null
                        ]}>AUMENTAR</Text>
                        <Text style={[
                            styles.objectiveButtonText, 
                            selectedObjective === "increase" ? styles.selectedObjectiveButtonText : null
                        ]}>Musculatura</Text>
                    </TouchableOpacity>
                    <Icon name="barbell-outline" size={110} color="#0066cc" />
                </View>

                {/*Boton de MANTENERr*/}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[
                        styles.objectiveButton, 
                        selectedObjective === "maintain" ? styles.selectedObjectiveButton : null
                    ]} 
                    onPress={() => handleSelectObjective("maintain")}>
                        <Text style={[
                            styles.objectiveButtonText, 
                            selectedObjective === "maintain" ? styles.selectedObjectiveButtonText : null
                        ]}>MANTENERME</Text>
                        <Text style={[
                            styles.objectiveButtonText, 
                            selectedObjective === "maintain" ? styles.selectedObjectiveButtonText : null
                        ]}>En Forma</Text>
                    </TouchableOpacity>
                    <Icon name="heart-circle-sharp" size={110} color="#0066cc" />
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
    width: 150,
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
  selectedObjectiveButton: {
  backgroundColor: "#FF5733",
},
selectedObjectiveButtonText: {
  color: "#fff",
},
});