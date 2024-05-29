import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AddDevice, Login, Signup, Welcome, Home, Room, AccountSetting, DeviceSetting, AddRoom, Notification, Sensor } from "./screens";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthProvider } from './authContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" 
    screenOptions={{headerShown: false}} >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Add Room" component={AddRoom} />
      <Drawer.Screen name="Add Device" component={AddDevice} />
      <Drawer.Screen name="Sensor Setting" component={Sensor} />
      <Drawer.Screen name="Account Setting" component={AccountSetting} />
      <Drawer.Screen name="Log out" component={Login} />
    </Drawer.Navigator>
  );
}

export default function App() {
  
  return (
    <AuthProvider>
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
        <Stack.Screen
          name="Room"
          component={Room}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="DeviceSetting"
          component={DeviceSetting}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}