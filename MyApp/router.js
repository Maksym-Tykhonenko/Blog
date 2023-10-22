import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HomeScreen from "./screens/auth/HomeScreen";
import WebViewScreen from "./screens/auth/WebViewScreen";



const AuthStack = createNativeStackNavigator();
const WebView = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();


export const useRoute = (isAuth, idfa) => {

  if (isAuth) {
    
    return( <WebView.Navigator>
      <WebView.Screen initialParams={{ itemId: 41 }} options={{ headerShown: false }} name="Webview" component={WebViewScreen}/>
    </WebView.Navigator>)
 }
  return (
      <AuthStack.Navigator >
     
        <AuthStack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        
      </AuthStack.Navigator>
    )
};


{/**

*/}