import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
} from "react-native";
import { useLinkTo } from '@react-navigation/native';


const MyProfile = () => {

    const linkTo = useLinkTo();


    return (
        <View style={styles.conteiner}>
            <ImageBackground
                source={require('../../accets/backgroundImageForBlog.jpeg')}
                style={styles.img}>
                <Text style={styles.text}> MyProfile</Text>
            </ImageBackground>
            
        </View>
    )
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        //justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'red',
    }
});

export default MyProfile;