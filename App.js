import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome, Home } from "./screens";

import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" 
    screenOptions={{headerShown: false}} >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }} 
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}