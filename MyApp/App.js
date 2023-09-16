import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
} from 'react-native';

import { useRoute } from './router';


const App = () => {

  const [isAuth, setIsAuth] = useState(true);


  const routing = useRoute(isAuth)

  return (

    <NavigationContainer>
        {routing}
    </NavigationContainer>
    
  );
};

export default App;
