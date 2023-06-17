import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const AboutScreen = () => {
    return (
        <ScrollView>
            <View style={AboutScreenStyle.viewContainerStyle}>
                <Image
                    style={AboutScreenStyle.imageStyle}
                    resizeMode='contain'
                    source={{ uri: 'https://wallpapers.com/images/featured/nf5zqkjs1z6wisq5.jpg' }} />
                <Text>The oldest classical British and Latin writing had little
                    or no space between words and could be written in boustrophedon
                    (alternating directions). Over time, text direction (left to right)
                    became standardized. Word dividers and terminal punctuation became common.
                    The first way to divide sentences into groups was the original paragraphos,
                    similar to an underscore at the beginning of the new group.[1] The Greek
                    parágraphos evolved into the pilcrow (¶), which in English manuscripts in the
                    Middle Ages can be seen inserted inline between sentences.</Text>
            </View>
            <View style={AboutScreenStyle.viewContainerStyle}>
                <Image
                    style={AboutScreenStyle.imageStyle}
                    resizeMode='contain'
                    source={{ uri: 'https://wallpapers.com/images/featured/nf5zqkjs1z6wisq5.jpg' }} />
                <Text>The oldest classical British and Latin writing had little
                    or no space between words and could be written in boustrophedon
                    (alternating directions). Over time, text direction (left to right)
                    became standardized. Word dividers and terminal punctuation became common.
                    The first way to divide sentences into groups was the original paragraphos,
                    similar to an underscore at the beginning of the new group.[1] The Greek
                    parágraphos evolved into the pilcrow (¶), which in English manuscripts in the
                    Middle Ages can be seen inserted inline between sentences.</Text>
            </View>
        </ScrollView >
    )
}
const AboutScreenStyle = StyleSheet.create({
    viewContainerStyle: {
        flex: 1,
        marginTop: 5,
    },
    imageStyle: {
        alignSelf: 'center',
        height: 300,
        width: 300,
        borderRadius: 30,
    }
})
export default AboutScreen;
