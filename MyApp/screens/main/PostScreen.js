import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    TextInput,
} from "react-native";

const PostScreen = () => {
    
    const [country, setCountry] = useState('');

    
    
    const fetchAllCountries = () => {
        //https://pokeapi.co/api/v2/pokemon/ditto
        const BASE_URL = 'https://restcountries.com/v3.1/all/';
//${BASE_URL}
        return fetch(`https://restcountries.com/v3.1/all/?fields=name,flags`).then((res) => {
            return res.json();
        }).then(resJson => {
            setCountry(resJson)
            console.log(country[0].flags)
        }).catch(err => {
            console.error(err)
        })

    };
    /*    const [countryData, setCountryData] = useState([]);*/




//Alert.alert('fetch')
//<Text style={styles.text}>Post Screen</Text>
    return (
        <View style={styles.conteiner}>
            <View style={styles.searchConteiner}>
                <Text style={styles.inputTitle}>Country name</Text>
                <TextInput style={styles.input} />
                <Button
                    onPress={() => fetchAllCountries()}
                    title="fetch" />
            </View>

            <View style={styles.countryInfoCoteiner}>
                <Text style={styles.text}></Text>
                <Text style={styles.text}></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchConteiner: {
        flex: 1,
        marginTop: 50,
        marginHorizontal: 30,
    },
    text: {
        fontSize: 20,
        color: 'blue',
    },
     input: {
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        borderRadius: 5,
        color: "#000",
        width: 250,
    },
});

export default PostScreen;