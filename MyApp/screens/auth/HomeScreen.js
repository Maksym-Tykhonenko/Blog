import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    ImageBackground,
    Image,
    TouchableOpacity, 
    FlatList,
    ScrollView,
    Modal,
    Pressable,
    Alert,
    SafeAreaView
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import PhotoScreen from '../main/PhotoScreen';
import AddCountry from './AddCounry';



//можливо сюди відправляти данні юзера
// import AsyncStorage from '@react-native-async-storage/async-storage' 

const countries = [
    {
        id: 48,
        country: "Canada",
        capital: "Ottawa",
        BestNationalDish: "Poutine",
        BestSightseeing: "Banff National Park",
        info: '',
    },
    {
        id: 49,
        country: "United States of America",
        capital: "Washington, D.C.",
        BestNationalDish: "Hamburger",
        BestSightseeing: "Grand Canyon",
        info: '',
    },
    {
        id: 50,
        country: "Mexico",
        capital: "Mexico City",
        BestNationalDish: "Tacos",
        BestSightseeing: "Chichen Itza",
        info: '',
    },
    {
        id: 51,
        country: "The Bahamas",
        capital: "Nassau",
        BestNationalDish: "Conch Salad",
        BestSightseeing: "Exuma Cays",
        info: '',
    },
    {
        id: 52,
        country: "Barbados",
        capital: "Bridgetown",
        BestNationalDish: "Cou-Cou and Flying Fish",
        BestSightseeing: "Harrison's Cave",
        info: '',
    },
    {
        id: 53,
        country: "Belize",
        capital: "Belmopan",
        BestNationalDish: "Rice and Beans with Stew Chicken",
        BestSightseeing: "Great Blue Hole",
        info: '',
    },
    {
        id: 54,
        country: "Haiti",
        capital: "Port-au-Prince",
        BestNationalDish: " Griot and Pikliz",
        BestSightseeing: "Citadelle Laferrière",
        info: '',
    },
    {
        id: 55,
        country: "Guyana",
        country: "Guyana",
        capital: "Georgetown",
        BestNationalDish: "Pepperpot",
        BestSightseeing: "Kaieteur Falls",
        info: '',
    },
    {
        id: 56,
        country: "Honduras",
        capital: "Tegucigalpa",
        BestNationalDish: "Baleadas",
        BestSightseeing: "Copán Ruins",
        info: '',
    },
    {
        id: 57,
        country: "Grenada",
        capital: "St. George's",
        BestNationalDish: "Oil Down",
        BestSightseeing: "Grand Anse Beach",
        info: '',
    },
    {
        id: 58,
        country: "Dominica",
        capital: "Roseau",
        BestNationalDish: "Callaloo Soup",
        BestSightseeing: "Boiling Lake",

        info: '',
    },
    {
        id: 59,
        country: "Dominican Republic",
        capital: "Santo Domingo",
        BestNationalDish: "Mangú",
        BestSightseeing: "Punta Cana",

        info: '',
    },
    {
        id: 60,
        country: "Costa Rica",
        capital: "San José",
        BestNationalDish: "Gallo Pinto",
        BestSightseeing: "Arenal Volcano",
        info: '',
    },
    {
        id: 61,
        country: "Cuba",
        capital: "Havana",
        BestNationalDish: "Ropa Vieja",
        BestSightseeing: "Old Havana",

        info: '',
    },
    {
        id: 62,
        country: "Nicaragua",
        capital: "Managua",
        BestNationalDish: "Gallo Pinto",
        BestSightseeing: "Ometepe Island",
        info: '',
    },
    {
        id: 63,
        country: "Panama",
        capital: "Panama City",
        BestNationalDish: "Sancocho",
        BestSightseeing: "Panama Canal",
        info: '',
    },
    {
        id: 64,
        country: "Saint Kitts and Nevis",
        capital: "Basseterre",
        BestNationalDish: "Saltfish and Johnny Cakes",
        BestSightseeing: "Brimstone Hill Fortress",

        info: '',
    },
    {
        id: 65,
        country: "Saint Lucia",
        capital: "Castries",
        BestNationalDish: "Green Fig and Saltfish",
        BestSightseeing: "Pitons",
        info: '',
    },
    {
        id: 66,
        country: "Saint Vincent and the Grenadines",
        capital: "Kingstown",
        BestNationalDish: "Roasted Breadfruit and Fried Jackfish",
        BestSightseeing: "Tobago Cays",
        info: '',
    },
    {
        id: 67,
        country: "Trinidad and Tobago",
        capital: "Port of Spain",
        BestNationalDish: "Roti",
        BestSightseeing: "Maracas Beach",

        info: '',
    },
    {
        id: 68,
        country: "Jamaica",
        capital: "Kingston",
        BestNationalDish: "Jerk Chicken",
        BestSightseeing: "Dunn's River Falls",

        info: '',
    },
    {
        id: 69,
        country: "El Salvador",
        capital: "San Salvador",
        BestNationalDish: "Pupusas",
        BestSightseeing: "Ruta de las Flores",

        info: '',
    },
    {
        id: 70,
        country: "Guatemala",
        capital: "Guatemala City",
        BestNationalDish: "Pepián",
        BestSightseeing: "Tikal National Park",
        info: '',
    },
    {
        id: 1,
        country: "Albania",
        capital: "Tirana",
        BestNationalDish: "Tavë kosi",
        BestSightseeing: "Butrint",
        info: '',
    },
    {
        id: 2,
        country: "Andorra",
        capital: "Andorra la Vella",
        BestNationalDish: "Trinxat",
        BestSightseeing: "Casa de la Vall",
        info: '',
    },
    {
        id: 3,
        country: "Austria",
        capital: "Vienna",
        BestNationalDish: "Wiener Schnitzel",
        BestSightseeing: "Schönbrunn Palace",
        info: '',
    },
    {
        id: 4,
        country: "Belarus",
        capital: "Minsk",
        BestNationalDish: "Draniki",
        BestSightseeing: "Mir Castle Complex",
        info: '',
    },
    {
        id: 5,
        country: "Belgium",
        capital: "Brussels",
        BestNationalDish: "Moules-frites",
        BestSightseeing: "Grand Place",
        info: '',
    },
    {
        id: 6,
        country: "Bosnia and Herzegovina",
        capital: "Sarajevo",
        BestNationalDish: "Ćevapi",
        BestSightseeing: "Stari Most",
        info: '',
    },
    {
        id: 7,
        country: "Bulgaria",
        capital: "Sofia",
        BestNationalDish: "Bulgarian Banitsa",
        BestSightseeing: "Rila Monastery",
        info: '',
    },
    {
        id: 8,
        country: "Croatia",
        capital: "Zagreb",
        BestNationalDish: "Pasticada",
        BestSightseeing: "Plitvice Lakes",
        info: '',
    },
    {
        id: 9,
        country: "Cyprus",
        capital: "Nicosia",
        BestNationalDish: "Cyprus Meze",
        BestSightseeing: "Kourion",
        info: '',
    },
    {
        id: 10,
        country: "Czech Republic",
        capital: "Prague",
        BestNationalDish: "Svíčková",
        BestSightseeing: "Charles Bridge",
        info: '',
    },
    {
        id: 11,
        country: "Denmark",
        capital: "Copenhagen",
        BestNationalDish: "Smørrebrød",
        BestSightseeing: "Tivoli Gardens",
        info: '',
    },
    {
        id: 12,
        country: "Estonia",
        capital: "Tallinn",
        BestNationalDish: "Verivorst",
        BestSightseeing: "Old Town Tallinn",
        info: '',
    },
    {
        id: 13,
        country: "Finland",
        capital: "Helsinki",
        BestNationalDish: "Kalakukko",
        BestSightseeing: "Suomenlinna",
        info: '',
    },
    {
        id: 14,
        country: "France",
        capital: "Paris",
        BestNationalDish: "Coq au Vin",
        BestSightseeing: "Eiffel Tower",
        info: '',
    },
    {
        id: 15,
        country: "Germany",
        capital: "Berlin",
        BestNationalDish: "Sauerbraten",
        BestSightseeing: "Neuschwanstein Castle",
        info: '',
    },
    {
        id: 16,
        country: "Greece",
        capital: "Athens",
        BestNationalDish: "Moussaka",
        BestSightseeing: "Acropolis of Athens",
        info: '',
    },
    {
        id: 17,
        country: "Hungary",
        capital: "Budapest",
        BestNationalDish: "Goulash",
        BestSightseeing: "Fisherman's Bastion",
        info: '',
    },
    {
        id: 18,
        country: "Iceland",
        capital: "Reykjavik",
        BestNationalDish: "Lambakjöt",
        BestSightseeing: "Blue Lagoon",
        info: '',
    },
    {
        id: 19,
        country: "Ireland",
        capital: "Dublin",
        BestNationalDish: "Irish Stew",
        BestSightseeing: "Cliffs of Moher",
        info: '',
    },
    {
        id: 20,
        country: "Italy",
        capital: "Rome",
        BestNationalDish: "Pizza",
        BestSightseeing: "Colosseum",
        info: '',
    },
    {
        id: 21,
        country: "Kazakhstan",
        capital: "Nur-Sultan",
        BestNationalDish: "Beshbarmak",
        BestSightseeing: "Charyn Canyon",
        info: '',
    },
    {
        id: 22,
        country: "Kosovo",
        capital: "Pristina",
        BestNationalDish: "Flia",
        BestSightseeing: "Gračanica Monastery",
        info: '',
    },
    {
        id: 23,
        country: "Latvia",
        capital: "Riga",
        BestNationalDish: "Rupjmaize",
        BestSightseeing: "Rundāle Palace",
        info: '',
    },
    {
        id: 24,
        country: "Liechtenstein",
        capital: "Vaduz",
        BestNationalDish: "Käsknöpfle",
        BestSightseeing: "Vaduz Castle",
        info: '',
    },
    {
        id: 25,
        country: "Lithuania",
        capital: "Vilnius",
        BestNationalDish: "Cepelinai",
        BestSightseeing: "Trakai Island Castle",
        info: '',
    },
    {
        id: 26,
        country: "Luxembourg",
        capital: "Luxembourg City",
        BestNationalDish: "Judd mat Gaardebounen",
        BestSightseeing: "Vianden Castle",
        info: '',
    },
    {
        id: 27,
        country: "Malta",
        capital: "Valletta",
        BestNationalDish: "Fenek",
        BestSightseeing: "Megalithic Temples of Malta",
        info: '',
    },
    {
        id: 28,
        country: "Moldova",
        capital: "Chisinau",
        BestNationalDish: "Mămăligă",
        BestSightseeing: "Cricova Winery",
        info: '',
    },
    {
        id: 29,
        country: "Monaco",
        capital: "Monaco",
        BestNationalDish: "Barbagiuan",
        BestSightseeing: "Monte Carlo Casino",
        info: '',
    },
    {
        id: 30,
        country: "Montenegro",
        capital: "Podgorica",
        BestNationalDish: "Njeguški pršut",
        BestSightseeing: "Bay of Kotor",
        info: '',
    },
    {
        id: 31,
        country: "Netherlands",
        capital: "Amsterdam",
        BestNationalDish: "Stroopwafels",
        BestSightseeing: "Keukenhof Gardens",
        info: '',
    },
    {
        id: 32,
        country: "North Macedonia",
        capital: "Skopje",
        BestNationalDish: "Tavče gravče",
        BestSightseeing: "Lake Ohrid",
        info: '',
    },
    {
        id: 33,
        country: "Norway",
        capital: "Oslo",
        BestNationalDish: "Rakfisk",
        BestSightseeing: "Fjords of Norway",
        info: '',
    },
    {
        id: 34,
        country: "Poland",
        capital: "Warsaw",
        BestNationalDish: "Pierogi",
        BestSightseeing: "Wieliczka Salt Mine",
        info: '',
    },
    {
        id: 35,
        country: "Portugal",
        capital: "Lisbon",
        BestNationalDish: "Bacalhau à brás",
        BestSightseeing: "Belém Tower",
        info: '',
    },
    {
        id: 36,
        country: "Romania",
        capital: "Bucharest",
        BestNationalDish: "Mămăligă",
        BestSightseeing: "Bran Castle",
        info: '',
    },
    {
        id: 37,
        country: "Russia",
        capital: "Moscow",
        BestNationalDish: "Pelmeni",
        BestSightseeing: "Red Square",
        info: '',
    },
    {
        id: 38,
        country: "San Marino",
        capital: "San Marino",
        BestNationalDish: "Torta Tre Monti",
        BestSightseeing: "San Marino Historic Centre and Mount Titano",
        info: '',
    },
    {
        id: 39,
        country: "Serbia",
        capital: "Belgrade",
        BestNationalDish: "Ćevapi",
        BestSightseeing: "Belgrade Fortress",
        info: '',
    },
    {
        id: 40,
        country: "Slovakia",
        capital: "Bratislava",
        BestNationalDish: "Bryndzové halušky",
        BestSightseeing: "Bratislava Castle",
        info: '',
    },
    {
        id: 41,
        country: "Slovenia",
        capital: "Ljubljana",
        BestNationalDish: "Idrijski žlikrofi",
        BestSightseeing: "Lake Bled",
        info: '',
    },
    {
        id: 42,
        country: "Spain",
        capital: "Madrid",
        BestNationalDish: "Paella",
        BestSightseeing: "Sagrada Família",
        info: '',
    },
    {
        id: 43,
        country: "Sweden",
        capital: "Stockholm",
        BestNationalDish: "Swedish Meatballs",
        BestSightseeing: "Stockholm Palace",
        info: '',
    },
    {
        id: 44,
        country: "Switzerland",
        capital: "Bern",
        BestNationalDish: "Rösti",
        BestSightseeing: "Jungfraujoch",
        info: '',
    },
    {
        id: 45,
        country: "Ukraine",
        capital: "Kyiv",
        BestNationalDish: "Borscht",
        BestSightseeing: "St. Sophia's Cathedral",
        info: '',
    },
    {
        id: 46,
        country: "United Kingdom",
        capital: "London",
        BestNationalDish: "Fish and Chips",
        BestSightseeing: "Big Ben",
        info: '',
    },
    {
        id: 47,
        country: "Vatican City",
        capital: "Vatican City",
        BestNationalDish: "Supplì",
        BestSightseeing: "St. Peter's Basilica",
        info: '',
    }
];



const HomeScreen = ({ navigation }) => {
    
    const [statys, setStatys] = useState('firstRegScr');
    //стан ім'я юзера
    const [name, setName] = useState('');
    //стан віку юзера
    const [age, setAge] = useState('');
    //стан краін які відвідав юзер
    const [visitiesCountry, setVisitiesCountry] = useState([]);
    //стан інфи яку юзер сам заповнює про краіни в яких він був
    const [inform, setInform] = useState('')
    //console.log('inform',inform)
    //стан всіх данних юзера
    const [allData, setAllData] = useState(null);
    //console.log('allData =>', allData)
    // стан мадалки данних юзера
    const [modalVisible, setModalVisible] = useState(false);
    // стан мадалки для додавання нових категорій
    const [addInfoModalVisible, setAddInfoModalVisible] = useState(false);
    // стан мадалки для додавання нових краін
    const [addModalVisitiesCountry, setAddModalVisitiesCountry] = useState(false);
    //стан 
    const [selectedCountry, setSelectedCountry] = useState(null);
    //стейт фото аватаркі
    const [selectImg, setSelectImg] = useState(null);


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


    const handleAddInfo = () => {

        if (selectedCountry) {
            // Шукаємо країну в стані visitiesCountry
            const updatedData = visitiesCountry.map((item) => {
                if (item.id === selectedCountry.id) {
                    return { ...item, info: inform };
                }
                return item;
            });

            setVisitiesCountry(updatedData);
            setAddInfoModalVisible(false);
        }
    };
    

    const imagePicker = () => {
    
        let options = {
            storageOptions: {
                path: 'image'
            }
        };
    
        launchImageLibrary(options, response => {
            console.log('response ==>', response.assets[0].uri);
            setSelectImg(response.assets[0].uri)
        })
    };


    return (

        <View style={styles.conteiner}>
            
            
            {statys === 'firstRegScr' && <View style={{}}>
                <Text style={{ fontSize: 25, marginBottom: 150, marginTop: 50 }}>Hello!!!It's you'r personal travel blog.Tab Next to get started</Text>
                
                <TouchableOpacity
                    onPress={() => setStatys('secondRegScr')}
                    style={styles.btn}>
                    <Text style={styles.btnTitle}>Next</Text>
                </TouchableOpacity>
            </View>}
            
            {statys === 'secondRegScr' && <View style={{}}>
                <View style={{ marginTop: 50 }}>
                        
                    <TextInput
                        style={styles.input}
                        placeholder='Enter you are name'
                        onChangeText={(name) => setName((prev) => ({ ...prev, name }))}
                    />
                </View>

                <View style={{ marginTop: 20, marginBottom: 50 }}>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter you are age'
                        onChangeText={(age) => setAge((prev) => ({ ...prev, age }))}
                    />
                </View>

                <TouchableOpacity
                    disabled={name !== '' && age !== '' ? false : true}
                    onPress={() => setStatys('addPhoto')}
                    style={styles.btn}>
                    <Text style={styles.btnTitle}>Next</Text>
                </TouchableOpacity>
            </View>}

            {statys === 'addPhoto' && <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 400, width: 400, justifyContent: 'center', justifyContent: 'center' }}>
        
                    {selectImg ? (<Image
                        source={{ uri: selectImg }}
                        style={{ width: 300, height: 300, alignSelf: 'center', borderRadius: 150, }} />) : (<Image
                            source={require('../../accets/user.png')}
                            style={{ width: 300, height: 300, alignSelf: 'center', borderRadius: 150, }} />)}
        
                </View>
   
                <TouchableOpacity
                    onPress={() => {
                        imagePicker();
                    }}
                    style={{
                        marginTop: 20, height: 50, width: 150, backgroundColor: 'green', borderRadius: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                    }}
                >
                    <Text style={{ fontSize: 15 }}>Select Photo</Text>
                </TouchableOpacity>
        
                <TouchableOpacity style={{ marginTop: 20, height: 50, width: 150, backgroundColor: 'green', borderRadius: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,}} onPress={()=>setStatys('tirdRegScr')}>
                    <Text>Next</Text>
                </TouchableOpacity>
                    
            </SafeAreaView>}


            {statys === 'tirdRegScr' && <View style={styles.cangeConteiner}>
                <ScrollView style={{}}>
                    <Text style={{ fontSize: 25, marginBottom: 20, marginTop: 20 }}>What countries have you been to?</Text>
                    
                    {countries.map((country) => {
                        return (
                            <View key={country.id}>
                                <TouchableOpacity
                                    style={{
                                        ...styles.countryItem,
                                        backgroundColor: visitiesCountry.some((i) => i.id === country.id) ? 'green' : '#fff'
                                           
                                    }}
                                    onPress={() => handleCountryPress(country)}
                                >
                                    <Text>{country.country}</Text>
                                </TouchableOpacity>
                                
                            </View>
                        )
                    })}
                    
                    <TouchableOpacity
                        onPress={() => selectAllData()}
                        style={styles.btn}
                    >
                        <Text style={styles.btnTitle}>Next</Text>
                    </TouchableOpacity>
                </ScrollView>
               
            </View>}

            {statys === 'appScr' && <View style={{ flex: 1, }}>
                {/**Модалка з інфою юзера */}
                <View style={styles.modalCenteredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}>
                        
                        <View style={styles.modalCenteredView}>

                            <View style={styles.modalView}>
                                {selectImg ? (
                                    <Image style={{ width: 80, height: 80, marginBottom: 10 , borderRadius: 50}} source={{uri: selectImg}} />)
                                    : (<Image style={{ width: 80, height: 80, marginBottom: 10 }} source={require('../../accets/user.png')} />)}
                                
                                <Text style={{ marginBottom: 8, fontSize: 17 }}><Text style={styles.modalText}>Name:</Text> {allData.name} </Text>
                                <Text style={{ marginBottom: 8, fontSize: 17 }}><Text style={styles.modalText}>Age:</Text> {allData.age} </Text>
                                <Text style={{ marginBottom: 8, fontSize: 17 }}><Text style={styles.modalText}>Total Visited:</Text> {visitiesCountry.length} </Text>
                                <Text style={{ ...styles.modalText, marginBottom: 8 }}>Countries in which I have been: </Text>
                                <FlatList
                                    data={visitiesCountry}
                                    keyExtractor={visities => visities.id}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity>
                                            <Text style={{ marginBottom: 6, fontSize: 15 }} >-{item.country}</Text>
                                        </TouchableOpacity>} />

                                <TouchableOpacity
                                    style={{ ...styles.modalButton, ...styles.modalButtonClose }}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text
                                        style={styles.modalTextStyle}>X
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    
                </View>

                {/**модалка для додавання краін */}
                <View style={styles.modalCenteredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={addModalVisitiesCountry}>
                        
                        <View style={styles.modalCenteredView}>

                            <View style={styles.modalView}>
                               
                                <ScrollView>
                                    <Text style={{ fontSize: 25, marginBottom: 20 }}>What countries have you been to?</Text>

                                    {countries.map((country) => {
                                        return (
                                            <View key={country.id}>
                                                <TouchableOpacity
                                                    style={{
                                                        ...styles.countryItem,
                                                        backgroundColor: visitiesCountry.some((i) => i.id === country.id) ? 'green' : '#fff'
                                           
                                                    }}
                                                    onPress={() => handleCountryPress(country)}
                                                >
                                                    <Text>{country.country}</Text>
                                                </TouchableOpacity>
                                
                                            </View>
                                        );
                                    })}

                                </ScrollView>

                                
                                <View style={{ justifyContent: 'center', marginLeft: 100 }}>

                                    <TouchableOpacity
                                        style={{
                                            ...styles.modalButton, backgroundColor: '#dcdcdc', width: 40,
                                            height: 40,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 3,
                                            shadowColor: '#000',
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 4,
                                            elevation: 5,
                                        }}
                                        onPress={() => { setAddModalVisitiesCountry(false) }}>
                                        <Text
                                            style={styles.modalTextStyle}>X
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    
                </View>

                {/* кнопки для відкриття модалки з інфою юзера та мод для додавання краін */}
                <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-evenly' }}>

                    <TouchableOpacity
                        style={{ ...styles.modalButton, ...styles.modalButtonOpen }}
                        onPress={() => { setModalVisible(true) }}>
                        <Text style={{ fontWeight: 'bold' }}>|{''}|{''}|</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ ...styles.modalButton, ...styles.modalButtonOpen }}
                        onPress={() => { setAddModalVisitiesCountry(true) }}>
                        <Text style={{ fontWeight: 'bold' }}>{''}+{''}</Text>

                    </TouchableOpacity>
                </View>
               

                <ScrollView>
                    {visitiesCountry.map((country) => {
                        return (
                            <View
                                style={{
                                    justifyContent: 'center', paddingLeft: 5, paddingBottom: 5, marginBottom: 5, borderRadius: 15, backgroundColor: '#f0e68c', shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,
                                }}
                                key={country.id}>
                               
                                <Text><Text style={{ fontWeight: 'bold' }}>Country:</Text>{' '}{country.country}</Text>
                                <Text><Text style={{ fontWeight: 'bold' }}>Capital:</Text>{' '}{country.capital}</Text>
                                <Text><Text style={{ fontWeight: 'bold' }}>Best national dish:</Text>{' '}{country.BestNationalDish}</Text>
                                <Text><Text style={{ fontWeight: 'bold' }}>Best sightseeing:</Text>{' '}{country.BestSightseeing}</Text>
                                {country.info && <View style={{
                                    borderRadius: 5, padding: 2, marginRight: 7, marginBottom: 7, backgroundColor: '#fff8dc', shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,
                                }}><Text style={{ fontWeight: 'bold' }}>My notes about this country:</Text><Text style={{ paddingLeft: 7, paddingRight: 7 }}>{country.info}</Text></View>}
                                
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedCountry(country);
                                        setAddInfoModalVisible(true);
                                        setInform('')
                                    }}
                                    style={styles.addInfoModal}>
                                    <Text>Add info +</Text>
                                    
                                </TouchableOpacity>

                                <View style={styles.modalCenteredView}>
                                    <Modal
                                        animationType='fade'
                                        transparent={true}
                                        visible={addInfoModalVisible}
                                    >
                                        <View style={styles.modalCenteredView}>
                                            <View style={styles.modalView}>
                                                <TouchableOpacity
                                                    onPress={() => setAddInfoModalVisible(false)}
                                                    style={{
                                                        backgroundColor: 'red', borderRadius: 20, padding: 10, marginBottom: 10, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', shadowColor: '#000',
                                                        shadowOffset: {
                                                            width: 0,
                                                            height: 2,
                                                        },
                                                        shadowOpacity: 0.25,
                                                        shadowRadius: 4,
                                                        elevation: 5,
                                                    }}>
                                                    <Text style={{ ...styles.modalTextStyle, top: 0 }}>X</Text>
                                                </TouchableOpacity>

                                                <Text style={{ marginBottom: 10, fontSize: 15 }}>Add you'r notes for <Text style={{ fontWeight: 'bold' }}>{selectedCountry?.country}:</Text></Text>
                                                
                                                <TextInput
                                                    style={{ ...styles.input, marginBottom: 10, }}
                                                    placeholder='Add a note'
                                                    onChangeText={(text) => setInform(text)}
                                                    value={inform}
                                                />
                                                {/*   onPress={()=> Alert.alert('add info')} */}
                                                <TouchableOpacity
                                                    onPress={handleAddInfo}
                                                    style={styles.addInfoModal}
                                                >
                                                    <Text>ADD +</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>


                            </View>
                            
                        )
                    })}
                </ScrollView>
                
            </View>}
            
           
                
        </View>
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
    btn: {
        marginTop: 40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#228b22',
        marginHorizontal: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    btnTitle: {
        fontSize: 18,
        
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
    form: {
        marginTop: 50,
    },

    countryItem: {
        backgroundColor: 'white',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
        alignItems: 'flex-start',
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
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    modalButtonClose: {
        backgroundColor: '#dcdcdc',
        position: "absolute",
        left: '50%',
        bottom: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      
    },
    modalText: {
        fontSize: 15,
        fontWeight: 'bold',
        
    },
    ///////////////////////////
    addInfoModal: {
        backgroundColor: 'green',
        borderRadius: 5,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },

 
});
    

export default HomeScreen;


