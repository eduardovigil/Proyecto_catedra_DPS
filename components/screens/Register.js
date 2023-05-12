import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import SecondNavigation from "../navigation/SecondNavigation";
import firebase from "../database/firebase";

export default function Register(props) {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
  };

  const initalState = {
    name: "",
    email: "",
    gender: "",
    age: "",
    weight: "",
    height: "",
    password: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "" || state.email === "" || state.gender === "" || state.gender === "" || state.weight === "" || state.height === "" || state.password === "") {
      alert("Uno o más campos están vacios");
    } else {
      try {
        await firebase.db.collection("users").add({
          name: state.name,
          email: state.email,
          gender: state.gender,
          age: state.age,
          weight: state.weight,
          height: state.height,
          password: state.password,
        });
 global.email = state.email; 
        navigation.navigate("SecondNavigation", { screen: "SelectDiet" });
        
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Icon name="person-circle-sharp" size={150} color="#0066cc" />
      </View>
          <Text style={styles.title}>Registrarse</Text>
      <View style={styles.inputContainer}>
      <Icon name="person-outline" size={24} color="black" style={styles.icon} />
        <TextInput style={styles.input}
         onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
         placeholder="Nombre de usuario" />
      </View>
      <View style={styles.inputContainer}>
      <Icon name="mail-outline" size={24} color="black" style={styles.icon} />
        <TextInput style={styles.input}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
         placeholder="Correo electrónico" />
      </View>
      <View style={styles.genderContainer}>
        <Text style={styles.genderText}>Género:</Text>
       <TouchableOpacity 
  style={[
    styles.genderButton, 
    selectedGender === "male" ? styles.selectedGenderButton : null
  ]} 
   onPress={() => {
    handleSelectGender("male");
    handleChangeText("male", "gender");
  }}
>
  <Text style={[
    styles.genderButtonText, 
    selectedGender === "male" ? styles.selectedGenderButtonText : null
  ]}>
    Hombre
  </Text>
</TouchableOpacity>

<TouchableOpacity 
  style={[
    styles.genderButton, 
    selectedGender === "female" ? styles.selectedGenderButton : null
  ]}
  value={state.gender} 
   onPress={() => {
    handleSelectGender("female");
    handleChangeText("female", "gender");
  }}
>
  <Text style={[
    styles.genderButtonText, 
    selectedGender === "female" ? styles.selectedGenderButtonText : null
  ]}>
    Mujer
  </Text>
</TouchableOpacity>
      </View>
      <View style={styles.inlineInputContainer}>
      <View style={styles.subinput}>
      <Icon name="calendar-outline" size={24} color="black" style={styles.icon} />

  <TextInput 
    style={[styles.input, styles.infoinput]} 
    placeholder="Edad" 
    keyboardType="numeric"
    onChangeText={(value) => handleChangeText(value, "age")}
    value={state.age}

  />
  </View>
      <View style={styles.subinput}>
<Icon name="barbell-outline" size={24} color="black" style={styles.icon} />
  <TextInput 
    style={[styles.input, styles.infoinput]} 
    placeholder="Peso" 
    keyboardType="numeric"
    onChangeText={(value) => handleChangeText(value, "weight")}
    value={state.weight}
  />
  </View>
        <View style={styles.subinput}>
<Icon name="md-man" size={24} color="black" style={styles.icon} />
  <TextInput 
    style={[styles.input, styles.infoinput]} 
    placeholder="Estatura (cm)" 
    keyboardType="numeric"
    onChangeText={(value) => handleChangeText(value, "height")}
    value={state.height}
  />
</View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={!showPassword}
        onChangeText={(value) => handleChangeText(value, "password")}
          value={state.password}  />
        <TouchableOpacity style={styles.passwordButton} onPress={toggleShowPassword}>
          <Icon name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="black" style={styles.passwordIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => saveNewUser()}>        
      <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 

subinput: {
    flex: 1,
  marginHorizontal: 5,
  },

  icon: {
    position: "absolute",
    right: 10, // Ajustar la posición del icono usuario
    top: 15,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30,
  },
  inputContainer: {
  alignItems: "center",
  marginHorizontal: 10,
},
input: {
  width: 250,
  height: 40,
  borderWidth: 1,
  borderRadius: 5,
  paddingLeft: 10,
  paddingRight: 40, 
  marginVertical: 10,
},
 inlineInputContainer: {
  flexDirection: "row",
  justifyContent: "space-around",
  width: "80%",
  marginTop: 10,
},

  infoinput: {
    width: "105%",
  },
  genderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  genderText: {
    fontSize: 16,
    marginRight: 10,
  },
    title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  genderButton: {
    borderWidth: 1,
    borderColor: "green",
    color: "black",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  genderButtonText: {
    color: "#000",
    fontSize: 16,
  },
  passwordButton: {
    position: "absolute",
    right: 10,
top: 12,
},
passwordIcon: {
marginLeft: 5,
},
button: {
backgroundColor: "#cb2821",
borderRadius: 5,
paddingVertical: 10,
paddingHorizontal: 20,
marginVertical: 10,
},
selectedGenderButton: {
  backgroundColor: "green",
},
selectedGenderButtonText: {
  color: "#fff",
},

buttonText: {
color: "#fff",
fontSize: 16,
},
});