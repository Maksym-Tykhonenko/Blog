import React, { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    ImageBackground, 
    TouchableOpacity, 
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    Button,
} from 'react-native';

const FirstDataRegScreen = ({navigation}) => {
    
    return (
        <View style={styles.conteiner}>
            <View style={styles.form}>
                <Text style={styles.text}>Welcome to FirstDataRegScreen</Text>
            <View>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput
                    style={styles.input}
                    textAlign='center'
                              
                />
            </View>

            <View style={{ marginTop: 15 }}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                    style={styles.input}
                    textAlign='center'
                    secureTextEntry={true}
                              
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Second Data Reg')}
                style={styles.btn}>
                <Text style={styles.btnTitle}>Next</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
conteiner: {
        flex: 1,
        backgroundColor: 'skyblue',
        //position: 'relative',
    },
    form: {
        marginHorizontal: 40,
        //marginBottom: 100
    },
    text: {
        marginTop: 100,
        fontSize: 20,
        
    },
       btn: {
        marginTop: 40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#228b22',
        marginHorizontal: 80
    },
    btnTitle: {
        fontSize: 16,
        
    },
      input: {
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        borderRadius: 5,
        color: "#000",

    },
    inputTitle: {
        marginBottom: 10,
        fontSize: 18
    },

});
    

export default FirstDataRegScreen;