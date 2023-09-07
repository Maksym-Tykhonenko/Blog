import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Alert, Button, FlatList, } from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';


const PhotoScreen = () => {

const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  


  const fields = 'name,capital,population,flags,languages';
//?fields=${fields}
  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://restcountries.com/v3.1//region/america`);
      const data = response.data;
      setCountries(data);
      console.log('population',countries.population)
    } catch (error) {
      console.error('Помилка запиту:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Button title="Пошук країн" onPress={fetchCountries} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={countries}
          keyExtractor={(item) => item.cca3}
          renderItem={({ item }) => (
            <View style={{ borderWidth: 1, marginBottom: 3 }}>
             
              <Text>Country: {item.name.common}</Text>
              <Text>Capital: {item.capital}</Text>

             
             
              {/* Додайте інші дані про країну, які вам потрібні */}
            </View>
          )}
        />
      )}
    </View>
  );

};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    marginTop: 20
  },

  btnCam: {
    marginTop: 20,
    width: 160,
    height: 50,
    backgroundColor: '#28a745',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCam: {
    fontSize: 20,
    color: '#fff'
  },
  ///////////////////////
   countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryInfo: {
    flex: 1,
  },
  countryName: {
    fontWeight: 'bold',
  },
});


export default PhotoScreen;