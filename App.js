import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './components/screens/Start'
import { NavigationContainer } from '@react-navigation/native';
import FirstNavigation from './components/navigation/FirstNavigation';

export default function App() {
  return (
    <NavigationContainer>
  <FirstNavigation></FirstNavigation>
  </NavigationContainer>
  );
}

