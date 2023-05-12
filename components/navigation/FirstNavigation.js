import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/Login";
import Register  from "../screens/Register";
import Start from "../screens/Start";
import SecondNavigation from "./SecondNavigation";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function FirstNavigation() {
    return(
        
        <Stack.Navigator>
          <Stack.Screen 
            name="Start"
            component={Start}
            options={{title: "inicio", headerShown: false}}

          />
         
          <Stack.Screen 
            name="Login"
            component={Login}
            options={{title: "Iniciar Sesion"}}
          />

          <Stack.Screen 
            name="Register"
            component={Register}
            options={{title: "Registro"}}
          />
         <Stack.Screen 
                name="SecondNavigation"
                component={SecondNavigation} //Segunda navegacion
                options={{headerShown: false}}
            />

        </Stack.Navigator>
   
    );
}