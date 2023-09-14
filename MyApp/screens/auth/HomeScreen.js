import AsyncStorage from '@react-native-async-storage/async-storage';
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
    SafeAreaView
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';


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
    //console.log('statys', statys)
    //стан ім'я юзера
    const [name, setName] = useState('');
    //console.log('name =>', name)
    //стан віку юзера
    const [age, setAge] = useState('');
    //стан краін які відвідав юзер
    //стейт фото аватаркі
    const [selectImg, setSelectImg] = useState(null);
    //стейт відв краін
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
    


    const handleSetNameAgeSt = () => {
        
        setStatys('addPhoto')
        //try { async 
        //    await AsyncStorage.setItem('name', JSON.stringify(name));
        //    await AsyncStorage.setItem('age', JSON.stringify(age));
        //    await AsyncStorage.setItem('statys', JSON.stringify(statys))
        //} catch (e) {
        //    // saving error
        //}

    };


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
        setStatys('appScr');
        //storeAllData();
        //console.log('statys' + statys)
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

    {/**  const storeAllData = async () => {
        try {
            await AsyncStorage.setItem('allData', JSON.stringify(allData));
            await AsyncStorage.setItem('statys', JSON.stringify(statys));
            await AsyncStorage.setItem('visitCountry', JSON.stringify(visitiesCountry))
            console.log('saved')
        } catch (e) {
            // saving error  statysStoridj !== null && 
        }
    };
    const getAllData = async () => {
        try {
            const data = await AsyncStorage.getItem('allData');
            const visCountrs = await AsyncStorage.getItem('visitCountry')
            if (data !== null && visCountrs !== null) {
                setAllData(JSON.parse(data));
                setVisitiesCountry(JSON.parse(visCountrs));
                //setStatys('addPhoto')
                console.log('geting')
            }
        } catch (e) {
            // saving error
        }
    }
 */}
    


    const imagePicker = () => {
    
        let options = {
            storageOptions: {
                path: 'image'
            }
        };
    
        launchImageLibrary(options, response => {
            //console.log('response ==>', response.assets[0].uri);
            setSelectImg(response.assets[0].uri)
        });
        console.log(selectImg)
        // storeImg(selectImg)

    };

    {/**    const storeImg = async (img) => {
        try {
            await AsyncStorage.setItem('img', JSON.stringify(img));
        } catch (e) {
            // saving error
        }
    };

    const getImg = async () => {
        try {
            const img = await AsyncStorage.getItem('img')
            if (img !==null ) {
                setSelectImg(JSON.parse(img))
            }
        } catch (e){
             // saving error
        }
    }
    const getNameAgeSt = async () => {
        try {
            const name = await AsyncStorage.getItem('name');
            const age = await AsyncStorage.getItem('age')
            //const stat = await AsyncStorage.getItem('statys')
            if (statys !== null && name !== null && age !== null) {
                setName(JSON.parse(name));
                setAge(JSON.parse(age));
                //setStatys(JSON.parse(stat))
            }
        } catch (e) {
            // saving error
        }
    };

    useEffect(() => {
    
        //getNameAgeSt()
        getImg()
        getAllData();
        if (allData !== null) {
            setStatys('appScr')
        }
    
    }, []);*/}

    

    return (

        <View style={styles.conteiner}>
            
            <ImageBackground
                source={require('../../accets/gameElements/background.png')}
                resizeMode='cover'
                style={styles.image}
            >
            
                {statys === 'firstRegScr' && <View style={styles.subcontainer}>
                    <Text style={styles.greetingText}>Hello!!!It's you'r personal travel blog.Tab Next to get started</Text>
                
                    
                    <TouchableOpacity
                        onPress={() => setStatys('secondRegScr')}
                        style={styles.button}>
                        
                        <Text style={styles.btnTitle}>Next</Text>
                    </TouchableOpacity>

              
                </View>}
            
                {statys === 'secondRegScr' && <View style={styles.subcontainer}>
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
                        onPress={() => handleSetNameAgeSt()}
                        style={{ ...styles.button, marginTop: 20 }}>
                        <Text style={styles.btnTitle}>Next</Text>
                    </TouchableOpacity>
                </View>}

                {statys === 'addPhoto' && <SafeAreaView style={styles.subcontainer}>
                   
        
                    {selectImg ? (<View style={{ ...styles.avatarConteiner, width: 300, height: 300, }}><Image
                        source={{ uri: selectImg }}
                        style={styles.avatar} /></View>) : (<View style={{ ...styles.avatarConteiner, width: 300, height: 300, }}><Image
                            source={require('../../accets/user.png')}
                            style={styles.avatar} /></View>)}
        
                  
 
                    <TouchableOpacity
                        onPress={() => {
                            imagePicker();
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.btnTitle}>Select Photo</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={{ ...styles.button, marginTop: 20 }} onPress={() => setStatys('tirdRegScr')}>
                        <Text style={styles.btnTitle}>Next</Text>
                    </TouchableOpacity>
                    
                </SafeAreaView>}


                {statys === 'tirdRegScr' && <View style={styles.subcontainer}>
                    <ScrollView style={{}}>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.textBeforeCountryList}>What countries have you been to?</Text>

                            {/** cangeConteiner
                        {visitiesCountry ? (<Text style={{ fontSize: 25, marginBottom: 20, marginTop: 20 }}>Visited something new?</Text>) : (<Text style={{ fontSize: 25, marginBottom: 20, marginTop: 20 }}>What countries have you been to?</Text>)}
                        */}
                    
                    
                            {countries.map((country) => {
                                return (
                                    <View key={country.id}>
                                        <TouchableOpacity
                                            style={{
                                                ...styles.countryItem,
                                                backgroundColor: visitiesCountry.some((i) => i.id === country.id) ? '#E89E0B' : '#1B1A17',
                                            
                                            }}
                                            onPress={() => handleCountryPress(country)}
                                        >
                                            <Text style={{
                                                fontWeight: 'bold',
                                                color: visitiesCountry.some((i) => i.id === country.id) ? '#1B1A17' : '#E89E0B',
                                            }}>{country.country}</Text>
                                        </TouchableOpacity>
                                
                                    </View>
                                )
                            })}
                    
                            <TouchableOpacity
                                onPress={() => selectAllData()}
                                style={{ ...styles.button, marginBottom: 20, }}
                            >
                                <Text style={styles.btnTitle}>Next</Text>
                            </TouchableOpacity></View>
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
                                        <View style={styles.avatarInModal} >
                                            <Image style={{ width: '100%', height: '100%', }} source={{ uri: selectImg }} /></View>)
                                        : (<View style={styles.avatarInModal}><Image style={{ width: '100%', height: '100%', }} source={require('../../accets/user.png')} /></View>)}
                                
                                    <Text style={{ marginBottom: 8, fontSize: 17, color: '#E89E0B' }}><Text style={styles.modalText}>Name:</Text> {allData.name} </Text>
                                    <Text style={{ marginBottom: 8, fontSize: 17, color: '#E89E0B' }}><Text style={styles.modalText}>Age:</Text> {allData.age} </Text>
                                    <Text style={{ marginBottom: 8, fontSize: 17, color: '#E89E0B' }}><Text style={styles.modalText}>Total Visited:</Text> {visitiesCountry.length} </Text>
                                    <Text style={{ ...styles.modalText, marginBottom: 8, color: '#E89E0B' }}>Countries in which I have been: </Text>
                                    <FlatList
                                        data={visitiesCountry}
                                        keyExtractor={visities => visities.id}
                                        renderItem={({ item }) =>
                                            <TouchableOpacity>
                                                <Text style={{ marginBottom: 6, fontSize: 15, color: '#E89E0B' }} >-{item.country}</Text>
                                            </TouchableOpacity>} />

                                    <TouchableOpacity
                                        style={{ ...styles.modalButton, ...styles.modalButtonClose }}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text
                                            style={styles.modalButtonIcon}>X
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
                               
                                    <Text style={{ fontSize: 25, marginBottom: 10, color: '#E89E0B' }}>What countries have you been to?</Text>

                                    <ScrollView>
                                        

                                        {countries.map((country) => {
                                            return (
                                                <View key={country.id}>
                                                    <TouchableOpacity
                                                        style={{
                                                            borderColor: '#E89E0B',
                                                            borderWidth: 2,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            padding: 10,
                                                            marginBottom: 10,
                                                            borderRadius: 10,
                                                            shadowColor: '#D3B92A47',
                                                            shadowOffset: {
                                                                width: 0,
                                                                height: 12,
                                                            },
                                                            shadowOpacity: 0.25,
                                                            shadowRadius: 4,
                                                            elevation: 5,
                                                            backgroundColor: visitiesCountry.some((i) => i.id === country.id) ? '#E89E0B' : '#1B1A17'
                                           
                                                        }}
                                                        onPress={() => handleCountryPress(country)}
                                                    >
                                                        <Text style={{color: visitiesCountry.some((i) => i.id === country.id) ? '#1B1A17' : '#E89E0B'}}>{country.country}</Text>
                                                    </TouchableOpacity>
                                
                                                </View>
                                            );
                                        })}

                                    </ScrollView>

                                
                                    <View style={{ justifyContent: 'center', marginLeft: 100 }}>

                                        <TouchableOpacity
                                            style={{
                                                ...styles.modalButton,
                                                marginTop: 10,
                                                width: 40,
                                                height: 40,
                                                alignItems: 'center',
                                                justifyContent: 'center',
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
                                                style={styles.modalButtonIcon}>X
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
                            <Text style={styles.modalButtonIcon}>|{''}|{''}|</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ ...styles.modalButton, ...styles.modalButtonOpen }}
                            onPress={() => { setAddModalVisitiesCountry(true) }}>
                            <Text style={styles.modalButtonIcon}>{''}+{''}</Text>

                        </TouchableOpacity>
                    </View>
               

                    <ScrollView>
                        {visitiesCountry.map((country) => {
                            return (
                                <View
                                    style={styles.selectCountryCard}
                                    key={country.id}>
                               
                                    <Text style={{ color: '#E89E0B', fontSize: 18 }}><Text style={{ fontWeight: 'bold', }}>Country:</Text><Text style={{ fontSize: 17 }}>{' '}{country.country}</Text></Text>
                                    <Text style={{ color: '#E89E0B', fontSize: 18 }}><Text style={{ fontWeight: 'bold', }}>Capital:</Text><Text style={{ fontSize: 17 }}>{' '}{country.capital}</Text></Text>
                                    <Text style={{ color: '#E89E0B', fontSize: 18 }}><Text style={{ fontWeight: 'bold', }}>Best national dish:</Text><Text style={{ fontSize: 17 }}>{' '}{country.BestNationalDish}</Text></Text>
                                    <Text style={{ color: '#E89E0B', fontSize: 18 }}><Text style={{ fontWeight: 'bold', }}>Best sightseeing:</Text><Text style={{ fontSize: 17 }}>{' '}{country.BestSightseeing}</Text></Text>
                                    {country.info && <View style={styles.additionalCountryInformation}><Text style={{ fontWeight: 'bold', color: '#E89E0B', fontSize: 18 }}>My notes about {selectedCountry?.country}:</Text><Text style={{ color: '#E89E0B', fontSize: 17, paddingLeft: 10 }}>{country.info}</Text></View>}
                                
                                    <TouchableOpacity
                                        onPress={() => {
                                            setSelectedCountry(country);
                                            setAddInfoModalVisible(true);
                                            setInform('')
                                        }}
                                        style={styles.addInfoModal}>
                                        <Text style={{ fontWeight: '700' }}>Add info +</Text>
                                    
                                    </TouchableOpacity>

                                    {/**модалка в картці краіни */}
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
                                                            borderRadius: 15,
                                                            width: 40,
                                                            height: 40,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderWidth: 1,
                                                            borderColor: '#E89E0B',
                                                            backgroundColor: '#1B1A17',
                                                            marginBottom: 10
                                                        }}>
                                                        <Text style={{
                                                            fontWeight: 'bold',
                                                            color: '#E89E0B',
                                                            fontSize: 20,
                                                        }}>X</Text>
                                                    </TouchableOpacity>

                                                    <Text style={{
                                                        color: '#E89E0B',
                                                        fontSize: 17,
                                                        marginBottom: 15
                                                    }}>Add you'r notes about <Text style={{ fontWeight: 'bold' }}>{selectedCountry?.country}:</Text></Text>
                                                
                                                    <TextInput
                                                        style={{ ...styles.input, marginBottom: 15, }}
                                                        placeholder='Add a note'
                                                        onChangeText={(text) => setInform(text)}
                                                        value={inform}
                                                    />
                                                    {/*   onPress={()=> Alert.alert('add info')} */}
                                                    <TouchableOpacity
                                                        onPress={handleAddInfo}
                                                        style={styles.addInfoModal}
                                                    >
                                                        <Text style={{ fontWeight: 'bold' }}>ADD +</Text>
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
            
            </ImageBackground>
                
        </View>
    );
};   

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#1B1A17',
        //alignItems: 'center',
        //justifyContent: 'center',
        position: 'relative',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        //justifyContent: 'flex-end',
        //justifyContent: 'center',
    },
    subcontainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    greetingText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 150,
        marginTop: 50,
        color: '#E89E0B'
    },
    button: {
        width: 241,
        height: 57,
        top: 6,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#E89E0B',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#D3B92A47',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    btnTitle: {
        fontSize: 20,
        fontWeight: '600'
        
    },
    input: {
        borderWidth: 2,
        borderColor: '#E89E0B',
        height: 50,
        width: 250,
        borderRadius: 10,
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
        color: '#E89E0B',
        fontSize: 18,
        fontWeight: '700'
    },
    avatarConteiner: {
        marginTop: 40,
        marginBottom: 20,
        width: 300,
        height: 300,
        borderRadius: 150, // Половина ширини/висоти для зроблення круглим
        borderWidth: 2,
        borderColor: '#E89E0B',
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    textBeforeCountryList: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
        color: '#E89E0B'
    },
    countryItem: {
        width: 290,
        borderColor: '#E89E0B',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#D3B92A47',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    /////////////////////////////////////////////////////////////
    modalButtonIcon: {
        fontWeight: 'bold',
        color: '#E89E0B',
        fontSize: 20,
    },
    modalButton: {
        borderRadius: 15,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E89E0B',
        backgroundColor: '#1B1A17'
    },
    modalButtonOpen: {
        
        //backgroundColor: '#dcdcdc',
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
        //backgroundColor: '#dcdcdc',
        position: "absolute",
        left: '50%',
        bottom: 50,
        
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      
    },
    /////////////////
    selectCountryCard: {
        justifyContent: 'center',
        paddingLeft: 5,
        paddingBottom: 5,
        marginBottom: 5,
        borderRadius: 15,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#E89E0B',
        marginBottom: 10,
        marginHorizontal: 20,
        paddingTop: 10,
        paddingLeft: 15
    },
    addInfoModal: {
        backgroundColor: '#E89E0B',
        borderRadius: 50,
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
        shadowRadius: 18,
    },
    additionalCountryInformation: {
        marginTop: 10,
        marginRight: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E89E0B',
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    /////////////////
    modalCenteredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: '#1B1A17',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#E89E0B',
        borderRadius: 20,
        padding: 35,
        alignItems: 'flex-start',
    },
    avatarInModal: {
        marginBottom: 20,
                                            width: 80,
                                            height: 80,
                                            borderRadius: 150, // Половина ширини/висоти для зроблення круглим
                                            borderWidth: 2,
                                            borderColor: '#E89E0B',
                                            overflow: 'hidden',
    }
    ///////////////////////////
    

 
});
    

export default HomeScreen;


