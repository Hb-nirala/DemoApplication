import React from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

const QRCodeScan = () => {

    const onSuccess = async (e) => {
        try {
            console.log(e);
            await Linking.openURL(e.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <QRCodeScanner
                onRead={e => onSuccess(e)}
                // flashMode={RNCamera.Constants.FlashMode.torch}
            />
        </>
    )
}
const styles = StyleSheet.create({
});

export default QRCodeScan;