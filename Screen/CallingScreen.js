import React from 'react';
import { Linking } from 'react-native'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const CallingScreen = ({ route, navigation }) => {
    const item = route.params.item
    return (
        <View style={styles.viewCallingStyle}>

            <Image
                style={styles.imageProfileStyle}
                source={{ uri: item.src }}
            />
            <Text style={styles.textNameStyle}>{item.name}</Text>
            <Text style={styles.textNumberStyle}>{item.number}</Text>
            <Text style={styles.textCallingStyle}>Calling...</Text>
            <TouchableOpacity
                onPress={() => { Linking.openURL(`tel:${item.number}`) }}>
                <View style={styles.viewCallingCutBtn}>
                    <Image
                        resizeMode='cover'
                        tintColor='white'
                        style={styles.imageCallEndStyle}
                        source={require('../assets/vintage-phone-receiver.png')}
                    />
                </View>

            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    viewCallingStyle: {
        flex: 1,
    },
    imageProfileStyle: {
        marginTop: 30,
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textNameStyle: {
        marginTop: 10,
        padding: 10,
        alignSelf: 'center',
        fontSize: 50,
        color: 'black',
    },
    textCallingStyle: {
        alignSelf: 'center',
        fontSize: 40,
        color: 'black',
    },
    textNumberStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'gray',
    },
    viewCallingCutBtn: {
        top: deviceHeight * 0.2,
        alignSelf: 'center',
        backgroundColor: 'red',
        width: deviceWidth * 0.2,
        height: deviceHeight * 0.110,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageCallEndStyle: {
        width: 30,
        height: 30,
    }
});

export default CallingScreen;
