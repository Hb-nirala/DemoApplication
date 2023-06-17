import React, { useState } from 'react';
import { PermissionsAndroid, View, Image, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const OpenImageGallery = () => {
    const [image, setImage] = useState()
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()

    // console.log('image', image)

    const requestGalleryPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Photos permission given");
                OpenGallery()
            } else {
                console.log("Photos permission denied");
            }
        } catch (error) {
            console.warn(error)
        }
    }

    const OpenGallery = () => {
        try {
            // launchImageLibrary({}, (value) => {
            //     console.log('photos-value---', value.assets[0].uri)
            //     setImage(value.assets[0].uri)
            // })
            ImagePicker.openPicker({
                multiple: true
            }).then(images => {
                console.log('images-0--', images[0].path);
                console.log('images-1--', images[1].path);
                console.log('images--2-', images[2].path);
                // console.log('images---3',images[3].path);
                setImage1(images[0].path)
                setImage2(images[1].path)
                setImage3(images[2].path)
            });
        } catch (error) {
            console.log('error--', error)
        }
    }

    return (
        <View>
            <Button
                style={{ width: screenWidth / 2, alignSelf: 'center', margin: 10 }}
                mode='contained'
                onPress={() => { requestGalleryPermission() }}>
                Open Gallery
            </Button>
            {
                image1 ?
                    <Image
                        style={{ margin: 20 }}
                        width={100}
                        height={100}
                        source={{ uri: image1 }} /> : null
            }
            {
                image2 ?
                    <Image
                        style={{ margin: 20 }}
                        width={100}
                        height={100}
                        source={{ uri: image2 }} /> : null
            }
            {
                image3 ?
                    <Image
                        style={{ margin: 20 }}
                        width={100}
                        height={100}
                        source={{ uri: image3 }} /> : null
            }
        </View>
    )
}
export default OpenImageGallery;