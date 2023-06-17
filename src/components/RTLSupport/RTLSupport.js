import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { contactsData } from '../../../lib/GlobalConstant';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const RTLSupport = () => {
    const [isRTL, setISRTL] = useState(true)

    const renderItemData = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={[isRTL ? styles.viewRTLItemContainer : styles.viewItemContainer]}>
                    <Image
                        style={styles.imageContactStyle}
                        resizeMode='cover'
                        source={{ uri: item.src }} />
                    <View style={[isRTL ? styles.viewRTLNameNumberStyle : styles.viewNameNumberStyle]}>
                        <Text style={[isRTL ? styles.textRTLNameStyle : styles.textNameStyle]}>{item.name}</Text>
                        <Text style={[isRTL ? styles.textRTLNumberStyle : styles.textNumberStyle]}>{item.number}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <View style={styles.buttonViewStyle}>
                <TouchableOpacity style={[isRTL ? styles.touichableStyle : styles.touichableRTLStyle]} onPress={() => { setISRTL(false) }}>
                    <Text style={[styles.textStyle]}>LTR Support</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[isRTL ? styles.touichableRTLStyle : styles.touichableStyle]} onPress={() => { setISRTL(true) }}>
                    <Text style={[styles.textStyle]}>RTL Support</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.flatListStyle}
                data={contactsData}
                renderItem={renderItemData}
            />
        </>
    )
}
const styles = StyleSheet.create({
    touichableStyle: {
        width: deviceWidth / 3,
        backgroundColor: '#e00618',
        justifyContent: 'center',
        borderRadius: 30,
        // borderWidth: 2
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
    },
    buttonViewStyle: {
        marginVertical: 10,
        width: deviceWidth,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    flatListStyle: {
        flex: 1,
        // backgroundColor: 'red'
    },
    viewItemContainer: {
        width: deviceWidth - 20,
        margin: 5,
        padding: 5,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    imageContactStyle: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    viewNameNumberStyle: {
        alignSelf: 'center',
        marginLeft: 5,
    },
    textNameStyle: {
        fontSize: 20,
        color: 'black',
    },
    textNumberStyle: {
        fontSize: 15,
    },
    viewRTLItemContainer: {
        width: deviceWidth - 20,
        margin: 5,
        padding: 5,
        flexDirection: 'row-reverse',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    viewRTLNameNumberStyle: {
        alignSelf: 'center',
        marginRight: 5,
        alignItems: 'flex-end',
        // backgroundColor: 'yellow'
    },
    textRTLNameStyle: {
        fontSize: 20,
        color: 'black',
    },
    textRTLNumberStyle: {
        fontSize: 15,
    },
    touichableRTLStyle: {
        width: deviceWidth / 3,
        backgroundColor: 'green',
        justifyContent: 'center',
        borderRadius: 30,
    }
})
export default RTLSupport

