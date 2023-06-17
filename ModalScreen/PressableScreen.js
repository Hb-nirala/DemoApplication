import React from 'react';
import { Pressable, StyleSheet, Dimensions, Text } from 'react-native';

const screenHeight = Dimensions.get('screen').height;

const PressableScreen = ({ clickPress, buttonStatus, buttonOpen }) => {
    return (
        <Pressable
            style={[styles.button, buttonOpen]}
            onPress={clickPress}>
            <Text style={styles.textStyle}>{buttonStatus}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        alignSelf: 'center',
        marginTop: screenHeight * 0.3
    },
    textStyle: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    }
})
export default PressableScreen;
