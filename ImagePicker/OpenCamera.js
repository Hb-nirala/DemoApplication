import React from 'react';
import { PermissionsAndroid, View, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const OpenCameraScreen = () => {

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    // title: "App Camera Permission",
                    // message: "App needs access to your camera ",
                    // buttonNeutral: "Ask Me Later",
                    // buttonNegative: "Cancel",
                    // buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                openCamera()
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const openCamera = async () => {
        try {
            launchCamera({}, (value) => {
                console.log('value----', value)
            });
        } catch (error) {
            console.log('error--', error)
        }
    }

    return (
        <View>
            <Button
                style={{ width: screenWidth / 2, alignSelf: 'center' ,margin:10}}
                mode='contained'
                onPress={() => { requestCameraPermission() }}>Camera</Button>
        </View>
    )
}
export default OpenCameraScreen;