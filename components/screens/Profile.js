import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import firebase from '../database/firebase';

export default function Profile({navigation}) {
  const [userData, setUserData] = useState(null);
  const [imc, setIMC] = useState(null);
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("")

   

  useEffect(() => {
    
    async function fetchUserData() {
      try {
        const userQuerySnapshot = await firebase.db.collection('users').where('email', '==', global.email).get();
        if (!userQuerySnapshot.empty) {
          const userDoc = userQuerySnapshot.docs[0];
          setUserData(userDoc.data());
           }
      } catch (error) {
        console.error('Error en el fetch: ', error);
      }
    }

    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData && userData.weight && userData.height) {
      const heightInCm = userData.height / 100;
      const imcFinal = userData.weight / (heightInCm * heightInCm);
      setIMC(imcFinal.toFixed(2));
         if (imcFinal < 18.5) {
      setImage(require("../../assets/normalWeight.png"));
      setMsg("Tienes bajo peso :(");
    } else if (imcFinal >= 18.5 && imcFinal < 25) {
      setImage(require("../../assets/normalWeight.png"));
      setMsg("Tienes peso saludable :D");
    } else if (imcFinal >= 25 && imcFinal < 30) {
      setImage(require("../../assets/anormalWeight.png"));
      setMsg("Tienes sobrepeso :/");
    } else {
      setImage(require("../../assets/muchWeight.png"));
      setMsg("Tienes obesidad :(");
    }
    }
  }, [userData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi perfil</Text>
      {userData && (
        <>
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Usuario: </Text>
            <Text style={styles.value}> {userData.name}</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Correo: </Text>
            <Text style={styles.value}>{global.email}</Text>
          </View>
           <View style={styles.profileInfo}>
            <Text style={styles.label}>Género: </Text>
            <Text style={styles.value}> {userData.gender}</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Edad: </Text>
            <Text style={styles.value}> {userData.age} años</Text>
          </View>
<View style={styles.profileInfo}>
  <Text style={styles.label}>IMC:</Text>
  <Text style={styles.value}>{imc}</Text>
</View>
<View >
  {image !== null && ( 
            <Image style={styles.image} source={image} />
          )}
          <Text style={styles.result}>{msg}</Text>
</View>
        </>
      )}
      <TouchableOpacity 
  style={styles.button} 
  onPress={() => {
    global.email = null;
    navigation.navigate("Start");
  }}>
  <Text style={styles.buttonText}>Cerrar sesión</Text>
</TouchableOpacity>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
  },
  value: {
    flex: 2,
  },
   buttonText: {
    color: "#fff",
    fontSize: 20,
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
  image: {
    width: 75,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
  },
});
