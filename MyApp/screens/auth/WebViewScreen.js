//import { Text } from "@rneui/base";
import React, { useRef, useState, useEffect } from "react";
//import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

import WebView from "react-native-webview";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ReactNativeIdfaAaid, { AdvertisingInfoResponse } from '@sparkfabrik/react-native-idfa-aaid';
import { LogLevel, OneSignal } from 'react-native-onesignal';


const WebViewScreen = () => {

    const [idfa, setIdfa] = useState(null);

    useEffect(() => {
        ReactNativeIdfaAaid.getAdvertisingInfo()
            .then((res) =>
                !res.isAdTrackingLimited ? setIdfa(res.id) : setIdfa(null),
            )
            .catch((err) => {
                console.log(err);
                return setIdfa(null);
            });
    }, []);

    useEffect(() => {
        if (idfa) {
            // Метод для запиту дозволів на push-сповіщення
            OneSignal.Notifications.requestPermission(true);
        }
    },[idfa])

    const product = `https://quicktaskchallenge.space/3hwdYT8x?advertising_id=${idfa}`;

    const refWebview = useRef(null);

    //ф-ція для повернення назад
    const goBack = () => {

        
        if (refWebview && refWebview.current) {
            refWebview?.current?.goBack();
        }
    };

    //ф-ція для оновлення сторінки
    const reloadPage = () => {
        if (refWebview && refWebview.current) {
            refWebview?.current?.reload();
        }
    };

    ///
    {/** 
    const handleNavigation = (navState) => {
        const { url } = navState;

        if (url.startsWith('mailto:')) {
            // Обробка посилань на імейл
            Linking.openURL(url);
            return false;
        }

        return true;
    };
originWhitelist={['*']}
onNavigationStateChange={handleNavigation}
*/}

    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191d24' }}>
            <WebView
                textZoom={100}
                allowsBackForwardNavigationGestures={true}
                domStorageEnabled={true}
                javaScriptEnabled={true}
                source={{ uri: product }}
                allowsInlineMediaPlayback={true}
                setSupportMultipleWindows={false}
                mediaPlaybackRequiresUserAction={false}
                allowFileAccess={true}
                javaScriptCanOpenWindowsAutomatically={true}
                style={{ flex: 1, marginBottom: 7 }}
                ref={refWebview}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginBottom: -20 }}>
                <TouchableOpacity
                    style={{ marginLeft: 40 }}
                    onPress={goBack}>
                    <AntDesign name="left" style={{ color: '#fff', fontSize: 20 }} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginRight: 40 }}
                    onPress={reloadPage}>
                    <AntDesign name="reload1" style={{ color: '#fff', fontSize: 20 }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default WebViewScreen;
