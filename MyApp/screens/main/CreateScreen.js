import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from "react-native";


const CreateScreen = () => {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.text}>Create Screen</Text>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert('Open Camera')
                }}
                style={styles.btn}>
                <Text>Open</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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