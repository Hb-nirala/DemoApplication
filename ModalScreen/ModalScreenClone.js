import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Dimensions, Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const ModalScreenClone = () => {
    return (


        <View style={styles.viewMainModalStyle}>
            <View style={styles.viewSecondaryModalStyle}>
                <View style={styles.viewSecondary1ModalStyle}>
                    <Text style={styles.textTitleStyle}>Helth yoga Session</Text>
                    <Text style={styles.textDateandDay}>wednesday,06 feb 2023</Text>
                    <View style={styles.viewDivederStyle} />
                    <Icon name="time-outline" size={30} style={styles.iconLocationStyle}>
                        <Text style={styles.textTimeStyle}>10:00-12:00</Text>
                    </Icon>
                    <Icon name="location-sharp" size={30} style={styles.iconLocationStyle}>
                        <Text style={styles.textLocationStyle}>Ahmedabad</Text>
                    </Icon>
                    <Pressable style={styles.buttonStyle}>
                        <Text>EDIT</Text>
                    </Pressable>
                </View>
                <View style={styles.viewSecondary2ModalStyle}>
                    <Icon name="ios-ellipsis-vertical" size={30} alignSelf={"flex-end"} />
                    <View style={styles.viewIconStyle}>
                        <Icon name="ios-bicycle" size={60} color={'white'} />
                    </View>
                    <Pressable style={styles.buttonCancelStyle}>
                        <Text>CANCEL</Text>
                    </Pressable>

                </View>
            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    viewSecondaryModalStyle: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: screenHeight * 0.3,
        width: screenWidth - 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 10,
    },
    iconLocationStyle: {
        paddingTop: 5,
    },
    textDateandDay: {
        paddingTop: 0,
        padding: 5,
        fontSize: 15,
    },
    viewIconStyle: {
        marginTop: 10,
        backgroundColor: '#0a43ab',
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        alignSelf: 'center',
    },
    viewSecondary1ModalStyle: {
        width: '70%',
    },
    viewSecondary2ModalStyle: {
        width: '30%',
    },
    viewMainModalStyle: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        margin: 5,
        backgroundColor: 'blue',
        paddingTop: 10,
    },
    textTitleStyle: {
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#305fb7',
    },
    viewDivederStyle: {
        borderWidth: 0.5
    },
    textTimeStyle: {
        alignSelf: 'center',
        fontSize: 15,
    },
    textLocationStyle: {
        fontSize: 15,
    },
    buttonStyle: {
        marginTop: 10,
        marginRight: 5,
        alignItems: 'flex-end',
    },
    buttonCancelStyle: {
        marginTop: 20,
        alignSelf: 'center'
    }

})
export default ModalScreenClone;
