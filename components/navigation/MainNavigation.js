import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DietNavigation from './DietNavigation';
import ExerNavigation from './ExerNavigation';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();
export default function MainNavigation({ route }) {
  const { showDiets, exercise } = route.params;

  return (
    <Tab.Navigator>
      {showDiets ? (
        <Tab.Screen
          name="Dietas"
          component={DietNavigation}
          options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
            <Icon name="food-fork-drink" color="#cb2821" size={size} />
          ), }}
        />
      ) : null}
      {!showDiets ? (
        <Tab.Screen
          name="Ejercicios"
          options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
            <Icon name="dumbbell" color="#cb2821" size={size} />
          ),}}
        >
          {props => <ExerNavigation {...props} exercise={exercise} />}
        </Tab.Screen>
      ) : null}
      <Tab.Screen name="Profile" component={Profile}  options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
            <Icon name="face-man-profile" color="#cb2821" size={size} />
          ), }} />
    </Tab.Navigator>
  );
}

