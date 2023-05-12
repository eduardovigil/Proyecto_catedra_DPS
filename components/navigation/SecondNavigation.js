import { createStackNavigator } from "@react-navigation/stack";
import SelectDiet from "../screens/SelectDiet";
import SelectExer from "../screens/SelectExer";
import MainNavigation from "./MainNavigation";

const Stack = createStackNavigator();

export default function SecondNavigation() {
  

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectDiet"
        component={SelectDiet}
        options={{ title: "Seleccionar dieta", headerShown: false }}
      />
      <Stack.Screen
        name="SelectExer"
        component={SelectExer}
        options={{ title: "Seleccionar rutina" }}
      />
    </Stack.Navigator>
  );
}
