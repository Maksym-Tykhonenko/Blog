
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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

import { countries } from '../../data/countries';


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
    console.log("visitiesCountry ==>",visitiesCountry )
    //стан інфи яку юзер сам заповнює про краіни в яких він був
    const [inform, setInform] = useState('')
    //console.log('inform',inform)
    //стан всіх данних юзера
    const [allData, setAllData] = useState(null);
    console.log('allData =>', allData)
    // стан мадалки данних юзера
    const [modalVisible, setModalVisible] = useState(false);
    // стан мадалки для додавання нових категорій
    const [addInfoModalVisible, setAddInfoModalVisible] = useState(false);
    // стан мадалки для додавання нових краін
    const [addModalVisitiesCountry, setAddModalVisitiesCountry] = useState(false);
    //стан 
    const [selectedCountry, setSelectedCountry] = useState(null);

    {/** служебная кліар функция
    clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            // clear error
        }
    
        console.log('Done.')
    };*/}

    //ефект доставання данних із стора
    useEffect(() => {

        getFromStoreAllData();
        getFromStoreVisitiesCountry();
        getFromStoreSelectImg();

    }, []);

    //ефект запису данних в стор
    useEffect(() => {

        setInStoreAllData();
        setInStoreVisitiesCountry();
        setInStoreSelectImgelectImg();
        
    }, [allData, visitiesCountry]);

    //foo запису дати в стор
    const setInStoreAllData = async () => {

        try {
            await AsyncStorage.setItem('allData', JSON.stringify(allData));
            console.log('записали ДАТУ в стор')
        } catch (e) {
            console.log(e)
        }
    };

    //foo запису visitiesCountry в стор
    const setInStoreVisitiesCountry = async () => {

        try {
            await AsyncStorage.setItem('visitiesCountry', JSON.stringify(visitiesCountry));
            console.log('записали visitiesCountry в стор')
        } catch (e) {
            console.log(e)
        }
    };

     //foo запису selectImg в стор
    const setInStoreSelectImgelectImg = async () => {

        try {
            await AsyncStorage.setItem('selectImg', JSON.stringify(selectImg));
            console.log('записали selectImg в стор')
        } catch (e) {
            console.log(e)
        }
    };
    
    //foo доставання дати із стора
    const getFromStoreAllData = async () => {
        try {
            const data = await AsyncStorage.getItem('allData');
            if (data !== null) {
                setAllData(JSON.parse(data));
                // Здійснюйте дії з отриманими даними, наприклад, встановлюйте їх у стан компоненту.
                console.log('Отримані дані зі сховища:', allData);
            }
        } catch (e) {
            console.log(e);
        }
    };

    //foo доставання visitiesCountry із стора
    const getFromStoreVisitiesCountry = async () => {
        try {
            const visitC = await AsyncStorage.getItem('visitiesCountry');
            if (visitC !== null) {
                setVisitiesCountry(JSON.parse(visitC));
                // Здійснюйте дії з отриманими даними, наприклад, встановлюйте їх у стан компоненту.
                console.log('Отримані дані visitiesCountry зі сховища:', visitiesCountry);
            }
        } catch (e) {
            console.log(e);
        }
    };


    //foo додав аватарки 
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
        //console.log(selectImg)
        // storeImg(selectImg)

    };

    //foo доставання дати із стора
    const getFromStoreSelectImg = async () => {
        try {
            const ava = await AsyncStorage.getItem('selectImg');
            if (ava !== null) {
                setSelectImg(JSON.parse(ava));
                // Здійснюйте дії з отриманими даними, наприклад, встановлюйте їх у стан компоненту.
                console.log('Отримані дані зі сховища:', selectImg);
            }
        } catch (e) {
            console.log(e);
        }
    };

    //foo додавання то віднімання відвіданих краін 
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

    //foo сбору всіх данних юзера 
    const selectAllData = () => {
        //alert("дані успішно отримані");
        setAllData({
            name: name.name,
            age: age.age,
            visitiesCountry: visitiesCountry,
            avatar: selectImg,
        });
        setStatys('');
        //console.log('85 ALL DATA ==>', allData)
    };

    //foo додавання інфи до картки краіни
    const handleAddInfo = () => {

        if (selectedCountry) {
            // Шукаємо країну в стані visitiesCountry
            const updatedCountryData = visitiesCountry.map((item) => {
                if (item.id === selectedCountry.id) {
                    return { ...item, info: inform };
                }
                return item;
            });

            setAllData((prevData) => ({
                ...prevData, visitiesCountry: updatedCountryData
            }));
            setVisitiesCountry(updatedCountryData);
            setAddInfoModalVisible(false);
        };
    };

    //foo  додавання то віднімання відвіданих краін в МОДАЛЦІ
    const handleCountryPressInModalView = (country) => {

        // Перевіряємо, чи країна вже є в списку відвіданих
        const isVisited = visitiesCountry.some((item) => item.id === country.id);
        
        if (isVisited) {
            // Якщо країна вже була відвідана, видаляємо її зі списку
            const updatedCountries = visitiesCountry.filter((item) => item.id !== country.id);
            setVisitiesCountry(updatedCountries);
            setAllData((prevData) => ({
                ...prevData, visitiesCountry: updatedCountries
            }));
        } else {
            // Якщо країна ще не була відвідана, додаємо її до списку
            setVisitiesCountry([...visitiesCountry, country]);
            setAllData((prevData) => ({
                ...prevData, visitiesCountry: country
            }))
        }
    };


    return (

        <View style={styles.conteiner}>
            
            <ImageBackground
                source={require('../../accets/gameElements/backgr.png')}
                resizeMode='cover'
                style={styles.image}
            >
            
                {allData ? (<View style={{ flex: 1,  }}>

                    {/** кнопки відкриття модалок */}
                    <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-evenly', }}>

                        <TouchableOpacity
                            style={{ ...styles.modalButton, ...styles.modalButtonOpen,  }}
                            onPress={() => { setModalVisible(true) }}>
                            <Text style={styles.modalButtonIcon}>|{''}|{''}|</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ ...styles.modalButton, ...styles.modalButtonOpen,  }}
                            onPress={() => { setAddModalVisitiesCountry(true) }}>
                            <Text style={styles.modalButtonIcon}>{''}+{''}</Text>

                        </TouchableOpacity>

                       {/* служебная кнопка очистки інфи в сторе
                        <TouchableOpacity
                            style={{ ...styles.modalButton, ...styles.modalButtonOpen }}
                            onPress={() =>  clearAll() }>
                            <Text style={styles.modalButtonIcon}>{''}x{''}</Text>

                            </TouchableOpacity>*/}
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

                                   {/**модалка внутрі картки краіни */}
                                    <View style={styles.modalCenteredView}>
                                        <Modal
                                            animationType='fade'
                                            transparent={true}
                                            visible={addInfoModalVisible}
                                        >
                                            <View style={styles.modalCenteredView}>
                                                <View style={styles.modalView}>

                                                    {/**закрити модалку  внутрі картки краіни*/}
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
                                                  
                                                    {/**кнопка додавання інфи про краіну в модалці  внутрі картки краіни*/}
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

                                        
                    {/* <модалка інфи юзера */}
                    <View style={{...styles.modalCenteredView, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}>
                        
                            <View style={styles.modalCenteredView}>

                                <View style={{...styles.modalView}}>
                                    {selectImg ? (
                                        <View style={styles.avatarInModal} >
                                            <TouchableOpacity
                                            onPress={() => {
                                                imagePicker();
                                            }}>
                                                <Image style={{ width: '100%', height: '100%', }} source={{ uri: selectImg }} />
                                            </TouchableOpacity>
                                            </View>)
                                        : (<View style={styles.avatarInModal}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                imagePicker();
                                            }}>
                                            <Image style={{ width: '100%', height: '100%', }} source={require('../../accets/user.png')} />
                                        </TouchableOpacity>
                                        </View>)}
                                
                                    <Text style={{ marginBottom: 8, fontSize: 17, color: '#E89E0B' }}><Text style={{fontWeight: 'bold', fontSize: 17}}>Name:</Text> {allData.name} </Text>
                                    <Text style={{ marginBottom: 8, fontSize: 17, color: '#E89E0B' }}><Text style={{fontWeight: 'bold', fontSize: 17}}>Age:</Text> {allData.age} </Text>
                                    <Text style={{ marginBottom: 8, fontSize: 17, color: '#E89E0B' }}><Text style={{fontWeight: 'bold', fontSize: 17}}>Total Visited:</Text> {visitiesCountry.length} </Text>
                                    <Text style={{ ...styles.modalText, marginBottom: 8, color: '#E89E0B', fontWeight: 'bold', fontSize: 17 }}>Countries in which I have been: </Text>
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

                    {/**модалка додав краін */}
                    <View style={{...styles.modalCenteredView, backgroundColor: 'rgba(0,0,0,0.5)' }}>
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
                                                            backgroundColor: visitiesCountry.some((i) => i.id === country.id) ? '#E89E0B' : '#1B1A17'
                                           
                                                        }}
                                                        onPress={() => handleCountryPressInModalView(country)}
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

                
                </View>) : (<View>{statys === 'firstRegScr' && <View style={styles.subcontainer}>
                    <Text style={styles.greetingText}>Hello!!!It's you'r personal travel blog.Tab Next to get started</Text>
                
                    
                    <TouchableOpacity
                        onPress={() => setStatys('secondRegScr')}
                        style={{...styles.button, ...styles.shadow, marginTop: 75}}>
                        
                        <Text style={styles.btnTitle}>Next</Text>
                    </TouchableOpacity>

              
                </View>}
            
                {statys === 'secondRegScr' && <View style={styles.subcontainer}>
                    <View style={{ marginTop: 50 }}>
                        
                        <TextInput
                            style={{...styles.input, ...styles.shadow, fontStyle: 'italic',fontWeight: 'normal'}}
                                placeholder='Enter you are name'
                                placeholderTextColor='#696969'
                            onChangeText={(name) => setName((prev) => ({ ...prev, name }))}
                        />
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 50 }}>
                        <TextInput
                                style={{ ...styles.input, ...styles.shadow, fontStyle: 'italic', fontWeight: 'normal' }}
                                placeholder='Enter you are age'
                                placeholderTextColor='#696969'
                            onChangeText={(age) => setAge((prev) => ({ ...prev, age }))}
                        />
                    </View>

                    <TouchableOpacity
                        disabled={name !== '' && age !== '' ? false : true}
                        onPress={() => setStatys('addPhoto')}
                        style={{ ...styles.button, marginTop: 140, ...styles.shadow }}>
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
                        style={{...styles.button, ...styles.shadow}}
                    >
                        <Text style={styles.btnTitle}>Select Photo</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity 
                        style={{ ...styles.button, marginTop: 20, ...styles.shadow }} 
                        onPress={() => setStatys('tirdRegScr')}
                    >
                        <Text style={styles.btnTitle}>Next</Text>
                    </TouchableOpacity>
                    
                </SafeAreaView>}


                {statys === 'tirdRegScr' && <View style={styles.subcontainer}>
                    <ScrollView style={{}}>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{...styles.textBeforeCountryList, marginTop: 15}}>What countries have you been to?</Text>
                    
                            {countries.map((country) => {
                                return (
                                    <View key={country.id}>
                                        <TouchableOpacity
                                            style={{
                                                ...styles.countryItem,
                                                backgroundColor: visitiesCountry.some((i) => i.id === country.id) ? '#E89E0B' : 'rgba(0,0,0,0.7)',
                                            
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
                                style={{ ...styles.button, marginBottom: 20, ...styles.shadow }}
                            >
                                <Text style={styles.btnTitle}>Next</Text>
                            </TouchableOpacity></View>
                    </ScrollView>
               
                </View>}
</View>)}

       
                
            
            </ImageBackground>
                
        </View>
    );
};   

////ініт AppTrackingTransparency поп-ап

//    if #available(iOS 14, *) {
//        ATTrackingManager.requestTrackingAuthorization { status in
//            switch status {
//            case .authorized:
//                // Tracking authorization dialog was shown
//                // and we are authorized
//                print("Authorized")
//                
//                // Now that we are authorized we can get the IDFA
//                print(ASIdentifierManager.shared().advertisingIdentifier)
//            case .denied:
//                // Tracking authorization dialog was
//                // shown and permission is denied
//                print("Denied")
//            case .notDetermined:
//                // Tracking authorization dialog has not been shown
//                print("Not Determined")
//            case .restricted:
//                print("Restricted")
//            @unknown default:
//                print("Unknown")
//            }
//        }
//    }

///////////////////////////
//func requestPermission() {
//  if (@available(iOS 14.5, *)) {
//      [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {
//          switch (status) {
//              case ATTrackingManagerAuthorizationStatusAuthorized:
//                  NSLog(@"Користувач дав дозвіл на відстеження");
//                  break;
//              case ATTrackingManagerAuthorizationStatusDenied:
//                  NSLog(@"Користувач відхилив запит на відстеження");
//                  break;
//              case ATTrackingManagerAuthorizationStatusNotDetermined:
//                  NSLog(@"Запит на відстеження ще не вирішений");
//                  break;
//              case ATTrackingManagerAuthorizationStatusRestricted:
//                  NSLog(@"Відстеження обмежено (наприклад, налаштування батьківського контролю)");
//                  break;
//              default:
//                  break;
//          }
//      }];
//  }
//}


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#1B1A17',
        position: 'relative',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    subcontainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 20,
        
        marginTop: 20,

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
    },
    btnTitle: {
        fontSize: 20,
        fontWeight: '600'
        
    },
    input: {
        borderWidth: 2,
        borderColor: '#E89E0B',
        borderRadius: 10,

        height: 50,
        width: 250,
        
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
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',

        padding: 10,
        marginBottom: 10,
        
    },
    /////////////////////////////////////////////////////////////
    modalButtonIcon: {
        fontWeight: 'bold',
        fontSize: 20,

        color: '#E89E0B',
        
    },
    modalButton: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#E89E0B',

        width: 40,
        height: 40,

        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor: '#1B1A17'
    },
    modalButtonOpen: {
        
    },
    modalButtonClose: {
        position: "absolute",
        left: '50%',
        bottom: 50,
    },
    /////////////////
    selectCountryCard: {
        justifyContent: 'center',

        marginBottom: 10,
        marginHorizontal: 20,
        
        paddingBottom: 5,
        paddingTop: 10,
        paddingLeft: 15,

        backgroundColor: 'rgba(0,0,0,0.7)',
        //opacity: 0.5,

        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#E89E0B',
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
    },
    /////////////////'rgba(0,0,0,0.7)'  '#1B1A17'
    modalCenteredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 34,

        backgroundColor: '#1B1A17',
    },
    modalView: {
        margin: 20,

        padding: 35,

        backgroundColor: 'transparent',

        borderWidth: 2,
        borderColor: '#E89E0B',
        borderRadius: 20,
        
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
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,
    }
});
    

export default HomeScreen;

 