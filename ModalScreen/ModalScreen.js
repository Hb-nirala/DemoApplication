import React, { useState } from 'react';
import { Alert, Dimensions, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const ModalScreen = ({ hidePress, style, closePress, visible, title, description, showIcon, color, styleIcon, buttonTitle }) => {
    return (
        <View style={[styles.centeredView, style]}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={closePress}>
                <View style={[styles.centeredView, style]}>
                    <View style={[styles.modalView]}>
                        <View style={[styles.viewCheck, styleIcon]}><Icon name={showIcon ? showIcon : 'alert'} size={30} padding={10} color={color ? color : "green"} /></View>

                        <Text style={styles.modalTextHeader}>{title}</Text>
                        <Text style={styles.modalText}>{description}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={hidePress}>
                            <Text style={styles.textStyle}>{buttonTitle ? buttonTitle : 'Ok'}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        height: deviceHeight,
        width: deviceWidth,
    },
    viewCheck: {
        backgroundColor: '#90f36f',
        borderRadius: 25,
    },
    modalView: {
        margin: 20,
        marginTop: 0,
        height: deviceHeight / 3 - 30,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 100,
    },
    buttonClose: {
        backgroundColor: '#f8d55b',
        width: 100,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalTextHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
});

export default ModalScreen;