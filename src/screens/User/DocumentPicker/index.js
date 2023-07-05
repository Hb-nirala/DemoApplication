import { Text, SafeAreaView, StatusBar, Button, BackHandler, Dimensions } from 'react-native'
import React, { useCallback, useState } from 'react'
import { StyleSheet } from 'react-native';
import DocumentPicker, { types } from 'react-native-document-picker';
import Pdf from 'react-native-pdf';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const DocumentPickerScreen = () => {
    const [fileResponse, setFileResponse] = useState([]);
    const [fileUri, setFileUri] = useState()

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [types.pdf],//only pdf selection
                allowMultiSelection: false,//multiselection 
            });
            console.log("response", response[0].uri);
            setFileUri(response[0].uri)
            // setFileResponse(response);
        } catch (err) {
            // console.warn(err);
            console.log("err", err);
        }
    }, []);

    // const onBackPress = () => {
    //     console.log("onBackPress");
    // }
    // //Backhandler hardwere press
    // BackHandler.addEventListener(
    //     'hardwareBackPress', onBackPress
    // );

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar barStyle={'dark-content'} />
            <Button title="Select 📑" onPress={handleDocumentSelection} />
            {/* {fileResponse.map((file, index) => (
                <Text
                    key={index.toString()}
                    style={styles.uri}
                    numberOfLines={1}
                    ellipsizeMode={'middle'}>
                    {fileUri}
                </Text>
            ))} */}
            <Pdf
                trustAllCerts={false}
                source={{ uri: fileUri, cache: true }}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log("error=======", error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf} />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    pdf: {
        marginTop: 30,
        width: deviceWidth - 40,
        height: deviceHeight * 0.6,
        marginHorizontal: 20,
        alignSelf: 'center',
    },
})
export default DocumentPickerScreen