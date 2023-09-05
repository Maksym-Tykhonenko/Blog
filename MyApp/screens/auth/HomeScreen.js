import React, { useState } from 'react';
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
    Pressable
} from 'react-native';


//можливо сюди відправляти данні юзера
// import AsyncStorage from '@react-native-async-storage/async-storage' 

const countries = [
      {
        id: 1,
        country: "Albania",
        capital: "Tirana",
        BestNationalDish: "Tavë kosi",
        BestSightseeing: "Butrint",
    },
    {
        id: 2,
        country: "Andorra",
        capital: "Andorra la Vella",
        BestNationalDish: "Trinxat",
        BestSightseeing: "Casa de la Vall",
    },
    {
        id: 3,
        country: "Austria",
        capital: "Vienna",
        BestNationalDish: "Wiener Schnitzel",
        BestSightseeing: "Schönbrunn Palace",
    },
    {
        id: 4,
        country: "Belarus",
        capital: "Minsk",
        BestNationalDish: "Draniki",
        BestSightseeing: "Mir Castle Complex",
    },
    {
        id: 5,
        country: "Belgium",
        capital: "Brussels",
        BestNationalDish: "Moules-frites",
        BestSightseeing: "Grand Place",
    },
    {
        id: 6,
        country: "Bosnia and Herzegovina",
        capital: "Sarajevo",
        BestNationalDish: "Ćevapi",
        BestSightseeing: "Stari Most",
    },
    {
        id: 7,
        country: "Bulgaria",
        capital: "Sofia",
        BestNationalDish: "Bulgarian Banitsa",
        BestSightseeing: "Rila Monastery",
    },
    {
        id: 8,
        country: "Croatia",
        capital: "Zagreb",
        BestNationalDish: "Pasticada",
        BestSightseeing: "Plitvice Lakes",
    },
    {
        id: 9,
        country: "Cyprus",
        capital: "Nicosia",
        BestNationalDish: "Cyprus Meze",
        BestSightseeing: "Kourion",
    },
    {
        id: 10,
        country: "Czech Republic",
        capital: "Prague",
        BestNationalDish: "Svíčková",
        BestSightseeing: "Charles Bridge",
    },
    {
        id: 11,
        country: "Denmark",
        capital: "Copenhagen",
        BestNationalDish: "Smørrebrød",
        BestSightseeing: "Tivoli Gardens",
    },
    {
        id: 12,
        country: "Estonia",
        capital: "Tallinn",
        BestNationalDish: "Verivorst",
        BestSightseeing: "Old Town Tallinn",
    },
    {
        id: 13,
        country: "Finland",
        capital: "Helsinki",
        BestNationalDish: "Kalakukko",
        BestSightseeing: "Suomenlinna",
    },
    {
        id: 14,
        country: "France",
        capital: "Paris",
        BestNationalDish: "Coq au Vin",
        BestSightseeing: "Eiffel Tower",
    },
    {
        id: 15,
        country: "Germany",
        capital: "Berlin",
        BestNationalDish: "Sauerbraten",
        BestSightseeing: "Neuschwanstein Castle",
    },
    {
        id: 16,
        country: "Greece",
        capital: "Athens",
        BestNationalDish: "Moussaka",
        BestSightseeing: "Acropolis of Athens",
    },
    {
        id: 17,
        country: "Hungary",
        capital: "Budapest",
        BestNationalDish: "Goulash",
        BestSightseeing: "Fisherman's Bastion",
    },
    {
        id: 18,
        country: "Iceland",
        capital: "Reykjavik",
        BestNationalDish: "Lambakjöt",
        BestSightseeing: "Blue Lagoon",
    },
    {
        id: 19,
        country: "Ireland",
        capital: "Dublin",
        BestNationalDish: "Irish Stew",
        BestSightseeing: "Cliffs of Moher",
    },
    {
        id: 20,
        country: "Italy",
        capital: "Rome",
        BestNationalDish: "Pizza",
        BestSightseeing: "Colosseum",
    },
    {
        id: 21,
        country: "Kazakhstan",
        capital: "Nur-Sultan",
        BestNationalDish: "Beshbarmak",
        BestSightseeing: "Charyn Canyon",
    },
    {
        id: 22,
        country: "Kosovo",
        capital: "Pristina",
        BestNationalDish: "Flia",
        BestSightseeing: "Gračanica Monastery",
    },
    {
        id: 23,
        country: "Latvia",
        capital: "Riga",
        BestNationalDish: "Rupjmaize",
        BestSightseeing: "Rundāle Palace",
    },
    {
        id: 24,
        country: "Liechtenstein",
        capital: "Vaduz",
        BestNationalDish: "Käsknöpfle",
        BestSightseeing: "Vaduz Castle",
    },
    {
        id: 25,
        country: "Lithuania",
        capital: "Vilnius",
        BestNationalDish: "Cepelinai",
        BestSightseeing: "Trakai Island Castle",
    },
    {
        id: 26,
        country: "Luxembourg",
        capital: "Luxembourg City",
        BestNationalDish: "Judd mat Gaardebounen",
        BestSightseeing: "Vianden Castle",
    },
    {
        id: 27,
        country: "Malta",
        capital: "Valletta",
        BestNationalDish: "Fenek",
        BestSightseeing: "Megalithic Temples of Malta",
    },
    {
        id: 28,
        country: "Moldova",
        capital: "Chisinau",
        BestNationalDish: "Mămăligă",
        BestSightseeing: "Cricova Winery",
    },
    {
        id: 29,
        country: "Monaco",
        capital: "Monaco",
        BestNationalDish: "Barbagiuan",
        BestSightseeing: "Monte Carlo Casino",
    },
    {
        id: 30,
        country: "Montenegro",
        capital: "Podgorica",
        BestNationalDish: "Njeguški pršut",
        BestSightseeing: "Bay of Kotor",
    },
    {
        id: 31,
        country: "Netherlands",
        capital: "Amsterdam",
        BestNationalDish: "Stroopwafels",
        BestSightseeing: "Keukenhof Gardens",
    },
    {
        id: 32,
        country: "North Macedonia",
        capital: "Skopje",
        BestNationalDish: "Tavče gravče",
        BestSightseeing: "Lake Ohrid",
    },
    {
        id: 33,
        country: "Norway",
        capital: "Oslo",
        BestNationalDish: "Rakfisk",
        BestSightseeing: "Fjords of Norway",
    },
    {
        id: 34,
        country: "Poland",
        capital: "Warsaw",
        BestNationalDish: "Pierogi",
        BestSightseeing: "Wieliczka Salt Mine",
    },
    {
        id: 35,
        country: "Portugal",
        capital: "Lisbon",
        BestNationalDish: "Bacalhau à brás",
        BestSightseeing: "Belém Tower",
    },
    {
        id: 36,
        country: "Romania",
        capital: "Bucharest",
        BestNationalDish: "Mămăligă",
        BestSightseeing: "Bran Castle",
    },
    {
        id: 37,
        country: "Russia",
        capital: "Moscow",
        BestNationalDish: "Pelmeni",
        BestSightseeing: "Red Square",
    },
    {
        id: 38,
        country: "San Marino",
        capital: "San Marino",
        BestNationalDish: "Torta Tre Monti",
        BestSightseeing: "San Marino Historic Centre and Mount Titano",
    },
    {
        id: 39,
        country: "Serbia",
        capital: "Belgrade",
        BestNationalDish: "Ćevapi",
        BestSightseeing: "Belgrade Fortress",
    },
    {
        id: 40,
        country: "Slovakia",
        capital: "Bratislava",
        BestNationalDish: "Bryndzové halušky",
        BestSightseeing: "Bratislava Castle",
    },
    {
        id: 41,
        country: "Slovenia",
        capital: "Ljubljana",
        BestNationalDish: "Idrijski žlikrofi",
        BestSightseeing: "Lake Bled",
    },
    {
        id: 42,
        country: "Spain",
        capital: "Madrid",
        BestNationalDish: "Paella",
        BestSightseeing: "Sagrada Família",
    },
    {
        id: 43,
        country: "Sweden",
        capital: "Stockholm",
        BestNationalDish: "Swedish Meatballs",
        BestSightseeing: "Stockholm Palace",
    },
    {
        id: 44,
        country: "Switzerland",
        capital: "Bern",
        BestNationalDish: "Rösti",
        BestSightseeing: "Jungfraujoch",
    },
    {
        id: 45,
        country: "Ukraine",
        capital: "Kyiv",
        BestNationalDish: "Borscht",
        BestSightseeing: "St. Sophia's Cathedral",
        
    },
    {
        id: 46,
        country: "United Kingdom",
        capital: "London",
        BestNationalDish: "Fish and Chips",
        BestSightseeing: "Big Ben",
       
    },
    {
        id: 47,
        country: "Vatican City",
        capital: "Vatican City",
        BestNationalDish: "Supplì",
        BestSightseeing: "St. Peter's Basilica",
       
    }
];



const HomeScreen = ({ navigation }) => {
    
    const [statys, setStatys] = useState('firstRegScr');
    //стан ім'я юзера
    const [name, setName] = useState('');
    //стан віку юзера
    const [age, setAge] = useState('');
    const [visitiesCountry, setVisitiesCountry] = useState([]);
    //стан всіх данних юзера
    const [allData, setAllData] = useState(null);
    console.log('allData =>', allData)
    // стан мадалки данних юзера
    const [modalVisible, setModalVisible] = useState(false);
    // стан мадалки для додавання нових категорій
    const [addInfoModalVisible, setAddInfoModalVisible] = useState(false);
    //стан нової категорії 
    const [newCategory, setNewCategory] = useState('');
    //стан значення нової категорії
    const [categoryValue, setCategoryValue] = useState('');
    //стан 
    const [selectedCountry, setSelectedCountry] = useState(null);

    

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
    
    //console.log('dataVisitiesCountry', allData.visitiesCountry);
    const handleAddInfo = () => {

        if (newCategory && categoryValue && selectedCountry) {
            // Створіть копію країни, до якої користувач додає інформацію
            const updatedCountry = { ...selectedCountry };

            // Додайте нову категорію та її значення до країни
            updatedCountry[newCategory] = categoryValue;

            // Оновіть список країн в стані allData з оновленою країною
            const updatedCountries = allData.visitiesCountry.map((country) =>
                country.id === updatedCountry.id ? updatedCountry : country
            );

            // Оновіть стан allData з новим списком країн
            const updatedAllData = { ...allData, visitiesCountry: updatedCountries };

            // Оновіть стан allData та закрийте модальне вікно
            setAllData(updatedAllData);
            setAddInfoModalVisible(false);

            // Очистіть поля вводу
            setNewCategory('');
            setCategoryValue('');
        };

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
                    onPress={() => setStatys('tirdRegScr')}
                    style={styles.btn}>
                    <Text style={styles.btnTitle}>Next</Text>
                </TouchableOpacity>
            </View>}
            
            {statys === 'tirdRegScr' && <View style={styles.cangeConteiner}>
                <ScrollView style={{}}>
                    <Text style={{ fontSize: 25, marginBottom: 20 }}>3_What countries have you been to?</Text>
                    
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

            {statys === 'appScr' && <View style={{ flex: 1 }}>
                      
              

                <View style={styles.modalCenteredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}>
                        
                        <View style={styles.modalCenteredView}>

                            <View style={styles.modalView}>
                                <Image style={{ width: 80, height: 80, marginBottom: 10 }} source={require('../../accets/25345e8510eeaab262dcaf3c56c57f30.jpg')} />
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
                    
                    <TouchableOpacity
                        style={{ ...styles.modalButton, ...styles.modalButtonOpen }}
                        onPress={() => { setModalVisible(true) }}>
                        <Image style={{ width: 40, height: 40 }} source={require('../../accets/png-transparent-emoji-smiley-iphone-text-messaging-man-emoji-men-face-head-smiley.png')} />
                        
                    </TouchableOpacity>

                </View>

                <ScrollView>
                    {allData.visitiesCountry.map((country) => {
                        return (
                            <View
                                style={{ justifyContent: 'center', paddingLeft: 5, paddingBottom: 5, marginBottom: 5, }}
                                key={country.id}>
                               
                                <Text><Text style={{ fontWeight: 'bold' }}>Country:</Text> {country.country}</Text>
                                <Text><Text style={{ fontWeight: 'bold' }}>Capital:</Text> {country.capital}</Text>
                                <Text><Text style={{ fontWeight: 'bold' }}>Best national dish:</Text> {country.BestNationalDish}</Text>
                                <Text><Text style={{ fontWeight: 'bold' }}>Best sightseeing:</Text> {country.BestSightseeing}</Text> 
                                
                                  {/* Відображення нової інформації під країною */}
                                {country[newCategory] && (
                                  <View>
                                    <Text>
                                      <Text style={{ fontWeight: 'bold' }}>{newCategory}:</Text>{' '}
                                      {country[newCategory]}
                                    </Text>
                                  </View>
                                )}
                                
                                <TouchableOpacity 
                                    onPress={() => {
                                        setSelectedCountry(country);
                                        setAddInfoModalVisible(true);
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
                                                    style={{backgroundColor: 'red', borderRadius: 20, padding: 10, borderWidth: 1, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{...styles.modalTextStyle, top: 0}}>X</Text>
                                                </TouchableOpacity>

                                                <TextInput
                                                    style={{...styles.input, marginBottom: 10, marginTop: 10}}
                                                    placeholder='Enter category name'
                                                    onChangeText={(text) => setNewCategory(text)}
                                                    value={newCategory}
                                                />
                                                <TextInput
                                                    style={{...styles.input, marginBottom: 10,}}
                                                    placeholder='Add a note'
                                                    onChangeText={(text) => setCategoryValue(text)}
                                                    value={categoryValue}
                                                />
                                                
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
  

    /*  */
               

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 50,
        alignItems: 'center',
        position: 'relative'
    },
    btn: {
        marginTop: 40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#228b22',
        marginHorizontal: 60
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
    },
    /*
          text: {
            marginTop: 100,
            fontSize: 20,
            
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
        
        countryName: {
            fontSize: 16,
        },
       */
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
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    modalButtonOpen: {
        //backgroundColor: '#F194FF',
        position: 'absolute',
        left: 180,
        top: 0,
    },
    modalButtonClose: {
        backgroundColor: '#2196F3',
        position: "absolute",
        left: '50%',
        bottom: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
      
    },
    modalText: {
        fontSize: 15,
        fontWeight: 'bold',
        
    },
    ///////////////////////////
    addInfoModal: {
        backgroundColor: 'green',
         borderWidth: 1,
         borderRadius: 5,
         width: 100,
         justifyContent: 'center',
         alignItems: 'center',
         paddingTop: 3,
         paddingBottom: 3

    },

 
});
    

export default HomeScreen;


