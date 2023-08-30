import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';

import ProfailScreen from './screens/main/ProfailScreen';
import PostScreen from './screens/main/PostScreen';
import CreateScreen from "./screens/main/CreateScreen";


const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();


export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName='Login'>
        
        <AuthStack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
        <AuthStack.Screen options={{ headerShown: false }} name='Registration' component={RegistrationScreen} />
        
      </AuthStack.Navigator>
    )
  }
  return (<MainTab.Navigator >
    <MainTab.Screen options={{
      headerShown: false,
    }} name='Profail' component={ProfailScreen} />
    <MainTab.Screen options={{
      headerShown: false,
    }} name='Post' component={PostScreen} />
    <MainTab.Screen options={{
      headerShown: false,
    }} name='Create' component={CreateScreen} />
  </MainTab.Navigator>)
};
