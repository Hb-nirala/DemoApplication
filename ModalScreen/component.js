import React from 'react';
import { Alert, Dimensions, Modal, Image, StyleSheet, Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const Component = ({ hidePress, style, closePress, visible, title, description, showIcon, task, color, styleIcon, buttonTitle }) => {

    return (
        <View style={[styles.centeredView, style]}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={closePress}
            >
                <View style={[styles.centeredView, style]}>
                    <View style={[styles.modalView]}>
                        <Pressable
                            onPress={hidePress}
                            style={styles.closeButton}>
                            <Icon name="ios-close" size={25} color={'white'} />
                        </Pressable>
                        <Icon name={showIcon} size={40} color={'white'} alignSelf={'center'} />
                        <Text style={styles.modalTextHeader}>{title}</Text>
                        <Text style={[styles.modalText, style]}>{description}</Text>
                        {
                            task == '1' ?
                                <Pressable style={[styles.nextButtonStyle, { alignSelf: 'center' }]}>
                                    <Text style={styles.modalText}>Proceed</Text>
                                </Pressable> : ''
                        }
                        {
                            task == '2' ?
                                <View style={[styles.viewButtonContainer]}>
                                    <Pressable style={[styles.cancelButtonStyle, task == '2' ? { width: deviceWidth * 0.35 } : '']}>
                                        <Text style={styles.modalText}>Cancel</Text>
                                    </Pressable>
                                    <Pressable style={[styles.nextButtonStyle, task == '2' ? { width: deviceWidth * 0.35 } : '']}>
                                        <Text style={[styles.modalText]}>Continue</Text>
                                    </Pressable>
                                </View> : ''
                        }

                        <Image
                            style={styles.imageStyle}
                            resizeMode='cover'
                            source={require('../assets/dialog-wave.png')}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        alignSelf: 'center',
        margin: 10,
        width: deviceWidth * 0.8,
        backgroundColor: '#0942a7',
        borderRadius: 10,
    },
    closeButton: {
        padding: 5,
        alignSelf: 'flex-end',
    },
    imageStyle: {
        width: '100%',
        borderRadius: 10,
    },
    modalText: {
        color: 'white',
        textAlign: 'center',
        padding: 8,
        fontSize: 20,
        marginBottom: 10,
    },
    modalTextHeader: {
        alignSelf: 'center',
        fontSize: 25,
        color: 'white',
    },
    nextButtonStyle: {
        backgroundColor: '#feb71c',
        width: deviceWidth * 0.7,
        marginBottom: 10,
        padding: 2,
        borderRadius: 25,

    },
    cancelButtonStyle: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#feb71c',
        marginBottom: 10,
        marginRight: 2,
    },
    viewButtonContainer: {
        marginTop: 20,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: deviceWidth * 0.75,
    }
});
export default Component;