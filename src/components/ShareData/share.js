import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Share from 'react-native-share';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const ShareData = () => {

    const shareFunction = () => {
        Share.open({})
            .then((res) => {
                console.log("res====", res);
            })
            .catch((err) => {
                err && console.log("error====", err);
            });
    }

    return (
        <>
            <View>
                <Text>share</Text>
            </View>
            <TouchableOpacity style={styles.touichableStyle} onPress={() => { shareFunction() }}>
                <Text style={[styles.textStyle]}>share</Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    touichableStyle: {
        width: deviceWidth / 3,
        backgroundColor: '#e00618',
        justifyContent: 'center',
        borderRadius: 30,
        margin: 10,
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
    }
})
export default ShareData