import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import LoaderKit from 'react-native-loader-kit';
import ReactNativeIdfaAaid, { AdvertisingInfoResponse } from '@sparkfabrik/react-native-idfa-aaid';

import { View } from 'react-native';

import { useRoute } from './router';


const App = () => {


const [idfa, setIdfa] = useState(null);

    useEffect(() => {
        ReactNativeIdfaAaid.getAdvertisingInfo()
            .then((res) =>
                !res.isAdTrackingLimited ? setIdfa(res.id) : setIdfa(null),
            )
            .catch((err) => {
                console.log(err);
                return setIdfa(null);
            });
    }, []);

    useEffect(() => {
        if (idfa) {
            // Метод для запиту дозволів на push-сповіщення
            OneSignal.Notifications.requestPermission(true);
        }
    },[idfa])


  //////////////////////////////////////////
  const [isAuth, setIsAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const routing = useRoute(isAuth, idfa);


  useEffect(() => {

    const checkUrl = 'https://quicktaskchallenge.space/rmDvfkMr';
    const targetData = new Date('2023-10-24');
    const currentData = new Date();

    if (currentData <= targetData) {
      setIsAuth(false)
      setIsLoading(false)
    } else {
      fetch(checkUrl).then(r => {
        if (r.status === 200) {
          setIsAuth(true)
          setIsLoading(false)
        } else {
          setIsAuth(false)
          setIsLoading(false)
        }
      }).catch(err => {
        console.log('error', err)
        setIsLoading(false)

      });
    }
  });

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize("ad72e047-16ec-418a-b98d-95a3ff33eca2");

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', (event) => {
    console.log('OneSignal: notification clicked:', event);
  });

  //Add Data Tags
  OneSignal.User.addTag("key", "value");

  return (

    <NavigationContainer>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#191d24' }}>
          <LoaderKit
            style={{ width: 50, height: 50 }}
            name={'BallSpinFadeLoader'}
            size={50}
            color={'#FFFF00'}
          />
        </View>
      ) : (
        routing
      )}
    </NavigationContainer>
    
  );
};
//
export default App;
