import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Pdf from 'react-native-pdf';
import { Button, Modal, PaperProvider, Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const PdfFile = () => {
    const [visible, setVisible] = useState(false)

    const downloadPDF = () => {
        console.log("downloadPDF");
        const source = "https://www.africau.edu/images/default/sample.pdf";
        let dirs = ReactNativeBlobUtil.fs.dirs;
        ReactNativeBlobUtil.config({
            fileCache: true,
            appendExt: 'pdf',
            path: `${dirs.DocumentDir}/${fileName}`,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                title: fileName,
                description: 'File downloaded by download manager.',
                mime: 'application/pdf',
            },
        })
            .fetch('GET', fileUrl)
            .then((res) => {
                // in iOS, we want to save our files by opening up the saveToFiles bottom sheet action.
                // whereas in android, the download manager is handling the download for us.
                if (Platform.OS === 'ios') {
                    const filePath = res.path();
                    let options = {
                        type: 'application/pdf',
                        url: filePath,
                        saveToFiles: true,
                    };
                    Share.open(options)
                        .then((resp) => console.log(resp))
                        .catch((err) => console.log(err));
                }
            })
            .catch((err) => console.log('BLOB ERROR -> ', err));

    }

    return (
        <PaperProvider>
            <Portal>
                <Modal visible={visible}
                    contentContainerStyle={styles.containerStyle}>
                    <View style={styles.pdfViewStyle}>
                        <View style={styles.iconViewStyle}>
                            <Icon name="download" size={30} style={styles.iconStyle} onPress={() => { downloadPDF() }} />
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