import { View, Text, StyleSheet, Dimensions, Share } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pdf from 'react-native-pdf';
import { Button, Modal, PaperProvider, Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'
import Iconone from 'react-native-vector-icons/Entypo'
import RNFetchBlob from 'rn-fetch-blob'
import AsyncStore from '../../../lib/AsyncStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PermissionsAndroid, Platform } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const PdfFile = () => {
    const [visible, setVisible] = useState(false)
    const [file, setFile] = useState('')

    const requestStoragePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission',
                        message: 'App needs access to storage to download the PDF.',
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else {
            return true;
        }
    };

    const downloadPdf = async () => {
        const isStoragePermissionGranted = await requestStoragePermission();
        if (isStoragePermissionGranted) {
            const { config, fs } = RNFetchBlob;
            const dirs = RNFetchBlob.fs.dirs;
            const { DocumentDir } = fs;
            const fileUrl = 'https://icseindia.org/document/sample.pdf'; // Replace with your actual PDF URL
            console.log("dirs.DownloadDir + `${options}", dirs.DownloadDir);
            const options = {
                fileCache: true,
                addAndroidDownloads: {
                    title: "Demo",
                    useDownloadManager: true,
                    notification: true,
                    path: dirs.DownloadDir + `${options}` + '.pdf', // Replace with your desired file path and name
                    description: 'Downloading PDF file.',
                },
            };

            config(options)
                .fetch('GET', fileUrl)
                .then((res) => {
                    // File downloaded successfully
                    console.log('File downloaded:', res.path());
                })
                .catch((error) => {
                    // Error occurred while downloading the file
                    console.error('Error downloading file:', error);
                });
        } else {
            console.log('Storage permission denied.');
        }
    };

    const sharePdf = () => {
        console.log("Share pdf");
    }

    return (
        <PaperProvider>
            <Portal>
                <Modal visible={visible}
                    contentContainerStyle={styles.containerStyle}>
                    <View style={styles.pdfViewStyle}>
                        <View style={styles.iconViewStyle}>
                            <Icon name="download" size={30} style={styles.iconStyle} onPress={() => { downloadPdf() }} />
                            <Iconone name="forward" size={30} style={styles.iconStyle} onPress={() => { sharePdf() }} />
                            <Icon name="closecircleo" size={30} style={styles.iconStyle} onPress={() => { setVisible(false) }} />
                        </View>
                        <Text style={styles.textStyle}>pdfFile</Text>
                        <Pdf
                            trustAllCerts={false}
                            source={{ uri: 'https://icseindia.org/document/sample.pdf', cache: true }}
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
                    </View>
                </Modal>
            </Portal>

            <Button style={{ marginTop: 30 }} onPress={() => { setVisible(true) }}>
                Open PDF
            </Button>
        </PaperProvider>
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8ab4f8'
    },
    iconStyle: {
        alignSelf: 'flex-end',
        // marginRight: 15,
        marginVertical: 15
    },
    pdf: {
        width: deviceWidth - 40,
        height: deviceHeight * 0.7,
        marginHorizontal: 20,
        alignSelf: 'center',
    },
    pdfViewStyle: {
        // flex: 1,
        // backgroundColor: '#8ab4f8',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 30,
        marginBottom: 20,
        paddingBottom: 20,
        fontWeight: 'bold'
    },
    iconViewStyle: {
        width: deviceWidth - 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default PdfFile