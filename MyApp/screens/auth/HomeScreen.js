import React, { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    ImageBackground, 
    TouchableOpacity, 
    FlatList,
    ScrollView,
    Modal,
    Pressable
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
    
    const [statys, setStatys] = useState('firstRegScr');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [visitiesCountry, setVisitiesCountry] = useState([]);
    const [allData, setAllData] = useState(null);
    console.log('allData =>', allData)
    const [modalVisible, setModalVisible] = useState(false);
    console.log('modalVisible', modalVisible)


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

    const selectAllData = () => {
        setAllData({ name: name.name, age: age.age, visitiesCountry: visitiesCountry });
        setStatys('appScr')
    };
    
    
    return (

        <View style={styles.conteiner}>
            
            {statys === 'firstRegScr' && <View style={styles.cangeConteiner}>
                <Text>1_Hello!!!It's you'r personal travel blog.Tab Next to get started</Text>
                
                <TouchableOpacity
                    onPress={() => setStatys('secondRegScr')}
                    style={styles.btn}>
                    <Text style={styles.btnTitle}>Next</Text>
                </TouchableOpacity>
            </View>}
            
            {statys === 'secondRegScr' && <View style={styles.cangeConteiner}>
                <View style={styles.form}>
                    <View>
                        <Text>2_</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter you are name'
                            onChangeText={(name) => setName((prev) => ({ ...prev, name }))}
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
                        onPress={() => setStatys('tirdRegScr')}
                        style={styles.btn}>
                        <Text style={styles.btnTitle}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>}
            
            {statys === 'tirdRegScr' && <View style={styles.cangeConteiner}>
                <ScrollView style={{}}>
                    <Text style={{ fontSize: 25, marginBottom: 20 }}>3_What countries have you been to?</Text>
                    
                    <FlatList style={{ flex: 1, flexDirection: 'row' }}
                        data={countries}
                        keyExtractor={country => country.id}
                        renderItem={({ item }) =>
                            <View style={{}}>
                                <TouchableOpacity
                                    style={{
                                        ...styles.countryItem,
                                        backgroundColor: visitiesCountry.some((i) => i.id === item.id) ? 'green' : '#fff'
                                           
                                    }}
                                    onPress={() => handleCountryPress(item)}
                                >
                                    <Text style={{}}>{item.country}</Text>
                                </TouchableOpacity>
                                
                            </View>}
                    />
                    
                    <TouchableOpacity
                        onPress={() => selectAllData()}
                        style={styles.btn}
                    >
                        <Text style={styles.btnTitle}>Next</Text>
                    </TouchableOpacity>
                </ScrollView>
               
            </View>}

            {statys === 'appScr' && <View style={styles.cangeConteiner}>
                      
              

                <View style={styles.modalCenteredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}>
                        
                        <View style={styles.modalCenteredView}>

                            <View style={styles.modalView}>
                                <Text>Name: {allData.name} </Text>
                                <Text>Age: {allData.age} </Text>
                                <Text>Countries in which I have been: </Text>
                                <FlatList
                                    data={visitiesCountry}
                                    keyExtractor={visities => visities.id}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity>
                                            <Text>-{item.country}</Text>
                                        </TouchableOpacity>} />

                                <TouchableOpacity
                                    style={[styles.modalButton, styles.modalButtonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    
                                    <Text
                                        style={styles.modalTextStyle}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    
                    <TouchableOpacity
                        style={[styles.modalButton, styles.modalButtonOpen]}
                        onPress={() => { setModalVisible(true) }}>
                        <Text style={styles.textStyle}>Open</Text>
                    </TouchableOpacity>

                </View>

                <View>
                    {visitiesCountry.map((country) => {
                        return (
                            <View key={country.id}>
                                <Text>{visitiesCountry.indexOf(country) + 1}</Text>
                                <Text>  Country: {country.country}</Text>
                                <Text>  Capital: {country.capital}</Text>
                                <TouchableOpacity style={{borderWidth: 1, borderRadius: 5}}>
                                    <Text>  Add info +</Text>
                                </TouchableOpacity>
                            </View>
                            
                             )
                         })}           
                </View>
                
            </View>}
        </View>
        

    );
};
/*   <View>
                    <FlatList
                        data={visitiesCountry}
                        keyExtractor={(visity) => visity.id}
                        renderItem={({ item }) =>
                            <View>
                                <Text>{visitiesCountry.indexOf(item) + 1}</Text>
                                <Text>Country: {item.country}</Text>
                                <Text>Capital: {item.capital}</Text>
                            </View>}
                    />
                </View>
                
 <FlatList
                                    data={visitiesCountry}
                                    keyExtractor={visities => visities.id}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity>
                                            <Text>-{item.country}</Text>
                                        </TouchableOpacity>} />               
                */

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        position: 'relative'
    },
    cangeConteiner: {
        marginTop: 50,
        marginBottom: 50,
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
        backgroundColor: 'yellow',
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
    },
   
    /////////////////////////////////////////////////////////////
    modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalButtonOpen: {
      backgroundColor: '#F194FF',
      position: 'absolute',
      top: 0
  },
  modalButtonClose: {
      backgroundColor: '#2196F3',
      
  },
  modalTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
    

export default HomeScreen;


