import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native'
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerate = () => {
    const [qrCodeText, setQrCodeText] = useState('');

    return (
        <View style={styles.viewStyle}>
            <QRCode
                value={qrCodeText ? qrCodeText : 'https://www.google.com/'}
                size={230}
            />
            <View style={styles.imageWithText}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ucUu1QC9rpR3FcgJ5yWoULcKGCu-W7x0aAdoWpuQXAW-WJ8ja7UGsrJgpNs-qJsHoAs&usqp=CAU' }} />
                <Text>State Bank of India</Text>
            </View>
            <View style={styles.viewButtonStyle}>
                <Button title='DOWNLOAD' onPress={() => { console.log("DOWNLOAD QR Code"); }} />
                <Button title='SHARE' onPress={() => { console.log("SHARE QR Code"); }} />
            </View>
            <View style={styles.dividerStyle} />
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'silver',
        padding: 40,
        paddingTop:80,
        alignItems: 'center',
        borderRadius: 10
    },
    imageStyle: {
        width: 40,
        height: 40,
        borderRadius: 25,
        margin: 5
    },
    imageWithText: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewButtonStyle: {
        width:230,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:20
    },
    dividerStyle: {
        marginTop: 20,
        backgroundColor: 'black',
        width: 230,
        height: 1
    }
})
export default QRCodeGenerate;