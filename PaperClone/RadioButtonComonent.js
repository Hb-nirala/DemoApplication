import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Provider, RadioButton, Text, TextInput } from 'react-native-paper';

const RadioButtonAlignText = ({ text, titleValue }) => {
    return (
        <Provider>
            <View style={Styles.viewRadioButtonStyle}>
               
                    <RadioButton/>
                    <Text>{text}</Text>
                
            </View>
        </Provider>
    )
}
const Styles = StyleSheet.create({
    viewRadioButtonStyle: {
        flexDirection: 'row'
    }
})
export default RadioButtonAlignText;