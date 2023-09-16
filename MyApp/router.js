import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/auth/HomeScreen";



const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();


export const useRoute = (isAuth) => {

 
  return (
    <AuthStack.Navigator >
     
      <AuthStack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        
    </AuthStack.Navigator>
  )
};
