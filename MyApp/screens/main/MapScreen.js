import React from 'react';
import { View, Text, TextInput } from 'react-native';
import MapView from 'react-native-maps';


const MapScreen =()=> {
    return (
    <SafeAreaView style={{ flex: 1,}}>
      
      <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: '700'}}>Home Screen</Text>

      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} />
      </View>
      
    </SafeAreaView>
  );
};
export default MapScreen;