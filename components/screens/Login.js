import * as React from 'react';
import { Component } from 'react';
import { ScrollView ,StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, InputAccessoryView } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import SecondNavigation from "../navigation/SecondNavigation";
import firebase from "../database/firebase";
import Spinner from 'react-native-loading-spinner-overlay';


export default function Login() {
  const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const loadingSpiner = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  };

  
  
    const changeShowPassword = () => {
      setShowPassword(!showPassword);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
    setError("Por favor ingrese correo y contraseña!.");
    return;
  }
    try {
      const querySnapshot = await firebase.db
        .collection("users")
        .where("email", "==", email)
        .where("password", "==", password)
        .get();

      if (querySnapshot.empty) {
        setError("Correo o contraseña inválidos!");
      } else {
        const user = querySnapshot.docs[0].data();
        setError(null);
        global.email = email; 
        
      navigation.navigate("SecondNavigation", { screen: "SelectDiet" });
      }
    } catch (error) {
      console.error("Error message login: ", error);
      setError("Un error ocurrió, intente luego");
    }
  };

  

  return (
    <View style={styles.container}>
    <Spinner visible={showSpinner} /> 
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/logo2.jpg')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <View style={styles.inputContainer}>
          <Icon name="person-outline" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
          value={email}
           onChangeText={(value) => setEmail(value)}
          placeholder="Correo electrónico"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={changeShowPassword}>
            <Icon name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="black" style={styles.icon2} />
          </TouchableOpacity>
          
        </View>
              {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity  style={styles.button} onPress={() => {
  console.log("Email: ", email);
  console.log("Password: ", password);
      loadingSpiner();
  handleLogin();

}}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
         
         <TouchableOpacity onPress={() => navigation.navigate("Register")}>
         <Text style={styles.registerText}>¿No tienes cuenta? Regístrate aquí</Text>
         </TouchableOpacity>
        
      </View>
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
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30,
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
   error: {
    color: "red",
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginVertical: 10,
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: "#cb2821",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  registerText: {
    marginTop: 20,
    textDecorationLine: "underline",
  },
   input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 40, 
    marginVertical: 10,
  },
  icon: {
    position: "absolute",
    right: 10, // Ajustar la posición del icono usuario
  },
  icon2: {
    position: "absolute",
    top: -10,
    right: 10, // Ajustar la posición del icono ojo
  },

});