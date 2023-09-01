import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';


import {
} from 'react-native';

import { useRoute } from './router';


const App = () => {

  const routing = useRoute(false)

  return (

    <NavigationContainer>
        {routing}
    </NavigationContainer>
    
  );
};

export default App;
