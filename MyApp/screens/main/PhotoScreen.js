import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



const PhotoScreen = () => {

  const [selectImg, setSelectImg] = useState('');


  const openCamera = async () => {

    const resultCamera = await launchCamera({mediaType: 'photo', quality:0});
    
  };
  
  const openGallery = async () => {

    const resultGallery = await launchImageLibrary({mediaType: 'photo', });
    console.log(resultGallery)
  };

  return (
    <SafeAreaView style={styles.conteiner}>
      <View style={{ height: 400, width: '100%' }}>
        <Image style={{ height: 400, width: '100%' }} source={{}} />
      </View>

      {/*  */}
      <TouchableOpacity style={styles.btnCam}
        onPress={openCamera}>
        <Text style={styles.textCam}>Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCam}
        onPress={openGallery}>
        <Text style={styles.textCam}>Camera</Text>
      </TouchableOpacity>
      
      
      
    </SafeAreaView>
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
  }
});


export default PhotoScreen;