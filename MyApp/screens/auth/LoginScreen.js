import React, {useState} from 'react';
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
} from 'react-native';

const initialUserState = {
    name: '',
    password: '',

};

const LoginScreen = ({ navigation }) => {
    
    console.log('navigation', navigation)

    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [user, setUser] = useState(initialUserState);
    console.log('state => ',user);

    const keyboardHide = () => {
        
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log('state in foo => ',user);
        setUser(initialUserState);

    };


    const { name, password } = user;

    return (
        <View style={styles.conteiner}>
            <ImageBackground
                style={styles.img}
                source={require('../../accets/backgroundImageForBlog.jpeg')}>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                    <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 180 }}>

                        <View>
                            <Text style={styles.inputTitle}>Name</Text>
                            <TextInput
                                style={styles.input}
                                textAlign='center'
                                
                                value={name}
                                onFocus={() => { setIsShowKeyboard(true) }}
                                onChangeText={(value) => setUser((prevState) => ({ ...prevState, name: value }))}
                            />
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.inputTitle}>Password</Text>
                            <TextInput
                                style={styles.input}
                                textAlign='center'
                                secureTextEntry={true}
                                
                                value={password}
                                onFocus={() => { setIsShowKeyboard(true) }}
                                onChangeText={(value) => setUser((prevState) => ({ ...prevState, password: value }))}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.btn}
                            activeOpacity={0.7}
                            onPress={() => keyboardHide()}
                        >
                            <Text style={styles.btnTitle}>SIGN IN</Text>
                        </TouchableOpacity>
                    
                    </View>

                    <View style={{paddingBottom: 5}}>
                        <Text style={{color: '#fff',}}>New to aplication?{' '}
                            <Text
                            style={styles.navBtn}
                            onPress={() => navigation.navigate('Registration')}>Sing Ip</Text>
                        </Text>
                        
                    </View>

                </KeyboardAvoidingView>

            </ImageBackground>

            
          
        </View>
    );

};



const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: 'skyblue',
        //position: 'relative',
    },
    img: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        //justifyContent: 'center',
    },
    form: {
        marginHorizontal: 40,
        //marginBottom: 100
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        borderRadius: 5,
        color: "#000",

    },
    inputTitle: {
        marginBottom: 10,
        fontSize: 18
    },
    btn: {
        marginTop: 40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#228b22',
        marginHorizontal: 80
    },
    btnTitle: {
        fontSize: 16,
        
    },
    navBtn: {
        //position: 'absolute',
        //bottom: 50,
        //right: 30,
        color: 'red',
        textDecorationLine: 'underline'
    }
});

export default LoginScreen;