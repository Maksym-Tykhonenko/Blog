import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

const PostScreen = () => {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.text}>Post Screen</Text>
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
        color: 'blue',
    }
});

export default PostScreen;