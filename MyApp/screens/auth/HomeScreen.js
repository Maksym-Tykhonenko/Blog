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
    FlatList,
    SafeAreaView,
    ScrollView
} from 'react-native';


//можливо сюди відправляти данні юзера
// import AsyncStorage from '@react-native-async-storage/async-storage' 

const countries = [
    {
        id: 1,
        country: "Albania",
        capital: "Tirana"
    },
    {
        id: 2,
        country: "Andorra",
        capital: "Andorra la Vella"
    },
    {
        id: 3,
        country: "Austria",
        capital: "Vienna"
    },
    {
        id: 4,
        country: "Belarus",
        capital: "Minsk"
    },
    {
        id: 5,
        country: "Belgium",
        capital: "Brussels"
    },
    {
        id: 6,
        country: "Bosnia and Herzegovina",
        capital: "Sarajevo"
    },
    {
        id: 7,
        country: "Bulgaria",
        capital: "Sofia"
    },
    {
        id: 8,
        country: "Croatia",
        capital: "Zagreb"
    },
    {
        id: 9,
        country: "Cyprus",
        capital: "Nicosia"
    },
    {
        id: 10,
        country: "Czech Republic",
        capital: "Prague"
    },
    {
        id: 11,
        country: "Denmark",
        capital: "Copenhagen"
    },
    {
        id: 12,
        country: "Estonia",
        capital: "Tallinn"
    },
    {
        id: 13,
        country: "Finland",
        capital: "Helsinki"
    },
    {
        id: 14,
        country: "France",
        capital: "Paris"
    },
    {
        id: 15,
        country: "Germany",
        capital: "Berlin"
    },
    {
        id: 16,
        country: "Greece",
        capital: "Athens"
    },
    {
        id: 17,
        country: "Hungary",
        capital: "Budapest"
    },
    {
        id: 18,
        country: "Iceland",
        capital: "Reykjavik"
    },
    {
        id: 19,
        country: "Ireland",
        capital: "Dublin"
    },
    {
        id: 20,
        country: "Italy",
        capital: "Rome"
    },
    {
        id: 21,
        country: "Kazakhstan",
        capital: "Nur-Sultan"
    },
    {
        id: 22,
        country: "Kosovo",
        capital: "Pristina"
    },
    {
        id: 23,
        country: "Latvia",
        capital: "Riga"
    },
    {
        id: 24,
        country: "Liechtenstein",
        capital: "Vaduz"
    },
    {
        id: 25,
        country: "Lithuania",
        capital: "Vilnius"
    },
    {
        id: 26,
        country: "Luxembourg",
        capital: "Luxembourg City"
    },
    {
        id: 27,
        country: "Malta",
        capital: "Valletta"
    },
    {
        id: 28,
        country: "Moldova",
        capital: "Chisinau"
    },
    {
        id: 29,
        country: "Monaco",
        capital: "Monaco"
    },
    {
        id: 30,
        country: "Montenegro",
        capital: "Podgorica"
    },
    {
        id: 31,
        country: "Netherlands",
        capital: "Amsterdam"
    },
    {
        id: 32,
        country: "North Macedonia",
        capital: "Skopje"
    },
    {
        id: 33,
        country: "Norway",
        capital: "Oslo"
    },
    {
        id: 34,
        country: "Poland",
        capital: "Warsaw"
    },
    {
        id: 35,
        country: "Portugal",
        capital: "Lisbon"
    },
    {
        id: 36,
        country: "Romania",
        capital: "Bucharest"
    },
    {
        id: 37,
        country: "Russia",
        capital: "Moscow"
    },
    {
        id: 38,
        country: "San Marino",
        capital: "San Marino"
    },
    {
        id: 39,
        country: "Serbia",
        capital: "Belgrade"
    },
    {
        id: 40,
        country: "Slovakia",
        capital: "Bratislava"
    },
    {
        id: 41,
        country: "Slovenia",
        capital: "Ljubljana"
    },
    {
        id: 42,
        country: "Spain",
        capital: "Madrid"
    },
    {
        id: 43,
        country: "Sweden",
        capital: "Stockholm"
    },
    {
        id: 44,
        country: "Switzerland",
        capital: "Bern"
    },
    {
        id: 45,
        country: "Ukraine",
        capital: "Kyiv"
    },
    {
        id: 46,
        country: "United Kingdom",
        capital: "London"
    },
    {
        id: 47,
        country: "Vatican City",
        capital: "Vatican City"
    },
];



const HomeScreen = ({ navigation }) => {
    
    const [statys, setStatys] = useState('firstScr');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [visitiesCountry, setVisitiesCountry] = useState([]);
    console.log('visitiesCountry', visitiesCountry)

    

    const handleCountryPress = (country) => {
        // Перевіряємо, чи країна вже є в списку відвіданих
        const isVisited = visitiesCountry.some((item) => item.id === country.id);

        
        if (isVisited) {
            // Якщо країна вже була відвідана, видаляємо її зі списку
            const updatedCountries = visitiesCountry.filter((item) => item.id !== country.id);
            setVisitiesCountry(updatedCountries);

            
        } else {
            // Якщо країна ще не була відвідана, додаємо її до списку
            setVisitiesCountry([...visitiesCountry, country]);
        }
    };

    return (

        <View style={styles.conteiner}>
            
            {statys === 'firstScr' && <View style={styles.cangeConteiner}>
                <Text>1_Hello!!!It's you'r personal travel blog.Tab Next to get started</Text>
                
                <TouchableOpacity
                    onPress={() => setStatys('secondScr')}
                    style={styles.btn}>
                    <Text style={styles.btnTitle}>Next</Text>
                </TouchableOpacity>
            </View>}
            
            {statys === 'secondScr' && <View style={styles.cangeConteiner}>
                <View style={styles.form}>
                    <View>
                        <Text>2_</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter you are name'
                            onChangeText={(value) => setName((prev) => ({ ...prev, value }))}
                        />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter you are age'
                            onChangeText={(age) => setAge((prev) => ({ ...prev, age }))}
                        />
                    </View>

                    <TouchableOpacity
                        disabled={name !== '' && age !== '' ? false : true}
                        onPress={() => setStatys('tirdScr')}
                        style={styles.btn}>
                        <Text style={styles.btnTitle}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>}
            
            {statys === 'tirdScr' && <View style={styles.cangeConteiner}>
                <ScrollView style={{marginHorizontal: 40}}>
                    <Text style={{fontSize: 25, marginBottom: 20}}>3_What countries have you been to?</Text>
                    
                    <FlatList style={{ flex: 1, flexDirection: 'row' }}
                        data={countries}
                        keyExtractor={country => country.id}
                        renderItem={({ item }) =>
                            <View style={ {}}>
                                <TouchableOpacity
                                    style={{
                                        ...styles.countryItem,
                                        backgroundColor: visitiesCountry.some((i) => i.id === item.id) ? 'green' : '#fff'
                                           
                                        }}
                                    onPress={()=> handleCountryPress(item)}
                                    >
                                    <Text style={{}}>{item.country}</Text>
                                </TouchableOpacity>
                                
                            </View>}
                    />
                    
                    <TouchableOpacity style={styles.btn}
                    >
                        <Text style={styles.btnTitle}>Next</Text>
                    </TouchableOpacity>
                </ScrollView>
               
            </View>}
        </View>
        
    );
}
/*  <FlatList style={{ flex: 1, flexDirection: 'row' }}
                        data={countries}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={styles.countryItem}>
                                <TouchableOpacity
                                    style={styles.chekBox}
                                    onPress={()=> setVisitiesCountry()}
                                >
                                    <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                                </TouchableOpacity>
                                <Text style={styles.countryName}>{item.country}</Text>
                            </View>} />*/

const styles = StyleSheet.create({
conteiner: {
        flex: 1,
    
        backgroundColor: 'skyblue',
        //position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    cangeConteiner: {
        marginTop: 50,
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
        marginHorizontal: 20
    },
    btnTitle: {
        fontSize: 16,
        
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        width: 250,
        borderRadius: 5,
        color: "#000",
        paddingLeft: 20

    },
    chekBox: {
         width: 15,
    height: 15,
    backgroundColor: 'yellow', // Змініть колір кнопки на потрібний
    marginRight: 8,
        
    },
    chekBoxText: {
    color: 'white',
    textAlign: 'center',
  },
    countryItem: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
  },
  countryName: {
    fontSize: 16,
    // Інші стилі тексту для назви країни
  },
});
    

export default HomeScreen;


/* 
                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}
                            onPress={()=> setVisitiesCountry([...visitiesCountry, {id: 1, country: 'Spain'}])}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>Spain</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}
                            onPress={()=> setVisitiesCountry([...visitiesCountry, {id: 2, country: 'France'}])}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>France</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>Italy</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>Greece</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>Japan</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>Thailand</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>Mexico</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>Australia</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>Egypt</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>India</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>Brazil</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>Canada</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>South Africa</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>New Zealand</Text>
                    </View>

                    <View style={styles.countryItem}>
                        <TouchableOpacity style={styles.chekBox}>
                            <Text style={styles.chekBoxText}>{'\u25A0'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.countryName}>United States</Text>
                    </View>*/