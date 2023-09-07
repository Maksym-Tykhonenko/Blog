import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native';



const AddCountry = () => {



    return (
        <SafeAreaView style={styles.conteiner}>
            <View style={{ marginBottom: 15, }}>
                <TouchableOpacity
                    style={{ ...styles.modalButton, ...styles.modalButtonOpen }}
                    onPress={() => { setModalVisible(true) }}>
                    <Text style={{ fontWeight: 'bold' }}>|{''}|{''}|</Text>

                </TouchableOpacity>
                
            </View>
      
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        marginHorizontal: 20,
        //marginVertical: 50,
        marginBottom: 20,
        marginTop: 20,
        alignItems: 'center',
        position: 'relative',
    },
    modalButton: {
        //borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    modalButtonOpen: {
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        width: 40,
        height: 40,
        backgroundColor: '#dcdcdc',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    }
});

export default AddCountry;