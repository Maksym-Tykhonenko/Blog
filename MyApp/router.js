import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/auth/HomeScreen";
//import FirstDataRegScreen from "./screens/auth/FirstDataRegScreen";
//import SecondDataRegScreen from "./screens/auth/SecondDataRegScreen";
//import PhotoDataRegScreen from "./screens/auth/PhotoDataRegScreen";
//////////////////////////////////////////////////////
//import LoginScreen from './screens/auth/LoginScreen';
//import RegistrationScreen from './screens/auth/RegistrationScreen';
//
//import ProfailScreen from './screens/main/ProfailScreen';
//import PostScreen from './screens/main/PostScreen';
//import CreateScreen from "./screens/main/CreateScreen";
//
//import MyProfile from "./screens/main/MyProfile";


const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();


export const useRoute = (isAuth) => {
  //if (!isAuth) {
    return (
      <AuthStack.Navigator >
        
        <AuthStack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        
      </AuthStack.Navigator>
    )
//  }
//  return (<MainTab.Navigator >
//
//    <MainTab.Screen options={{
//      headerShown: false,
//    }} name='Profail' component={ProfailScreen} />
//    <MainTab.Screen options={{
//      headerShown: false,
//    }} name='Post' component={PostScreen} />
//    <MainTab.Screen options={{
//      headerShown: false,
//    }} name='Create' component={CreateScreen} />
//
//  </MainTab.Navigator>)
};
