import React from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { tracks } from './trackList';

const DashBoard = (props) => {

    const onPressClick = (item) => {
        props.navigation.navigate('MusicPlayer', { item:item })
    }

    const Item = ({ title, image, onPress, item }) => {
        // console.log("item==========", item);
        return (
            <TouchableOpacity
                onPress={onPress}
                style={styles.buttonStyle}>
                <Image style={styles.imageStyle}
                    source={{ uri: image }} />
                <Text style={styles.songTitleStyle}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <Image
                style={styles.bannerImageStyle}
                source={{ uri: 'https://i.pinimg.com/originals/cb/3b/21/cb3b21cb75340ca1d721005631c01d3b.jpg' }} />
            <FlatList
                data={tracks}
                renderItem={({ item }) => { return <Item item={item} title={item.name} image={item.image} onPress={() => onPressClick(item)} /> }}
            />
        </>
    )
}
const styles = StyleSheet.create({
    songTitleStyle: {
        fontSize: 20,
    },
    buttonStyle: {
        backgroundColor: '#ffebeb',
        margin: 5,
        padding: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
    },
    imageStyle: {
        width: 50,
        height: 50,
        margin: 5,
        marginRight: 10
    },
    bannerImageStyle: {
        margin: 5,
        alignSelf: 'center',
        width: '98%',
        height: 100
    }
})
export default DashBoard