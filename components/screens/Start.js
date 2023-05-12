import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo2.jpg")} style={styles.image}/>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login") }>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register") }>
        <Text style={styles.buttonText}>Registro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
    },

    image: {
        width: 200,
        height: 200,
        marginBottom: 50,
    },

    button: {
        backgroundColor: "#cb2821",
        borderRadius: 5,
        marginBottom: 20,
        paddingVertical: 10,
        width: 200,
    },
    
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
       
});