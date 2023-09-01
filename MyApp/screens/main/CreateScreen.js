import React, { useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Button,
    ActivityIndicator
} from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";

import { useLinkTo } from '@react-navigation/native';



const CreateScreen = () => {

    const devices = useCameraDevices()
    const device = devices.back;

    useEffect(() => {
        checkPermission()
    }, []);


    const checkPermission = async () => {
        const newCameraPermission = await Camera.requestCameraPermission()
        const newMicrophonePermission = await Camera.requestMicrophonePermission()
    
        console.log(newCameraPermission);
    };

     
 if (device == null) return <ActivityIndicator />

    return (
        <View style={styles.conteiner}>
         
          
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
            />
                

        </View>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        
    },
    text: {
        fontSize: 20,
        color: 'green',
    },
    btn: {
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'

    }
});

export default CreateScreen;