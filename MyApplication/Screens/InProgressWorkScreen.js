import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const taskData = [
    {
        "name": 'Task-1',
    },
    {
        "name": 'Task-1',
    },
    {
        "name": 'Task-1',
    },
    {
        "name": 'Task-1',
    },
    {
        "name": 'Task-1',
    },
    {
        "name": 'Task-1',

    },
    {
        "name": 'Task-1',


    },
    {
        "name": 'Task-1',


    },
    {
        "name": 'Task-1',


    },
    {
        "name": 'Task-1',


    },
]

const Item = ({ item }) => {
    return (
        <View style={InProgressWorkStyle.viewItemContainer}>
            <View style={InProgressWorkStyle.viewNameNumberStyle}>
                <Text style={InProgressWorkStyle.textNameStyle}>{item.name}</Text>
                <Text style={InProgressWorkStyle.textNumberStyle}>{item.number}</Text>
            </View>
        </View>
    )
}

const InProgressWorkScreen = () => {

    return (
        <SafeAreaView>
            <FlatList
                data={taskData}
                renderItem={Item} />
        </SafeAreaView>
    )
}

const InProgressWorkStyle = StyleSheet.create({
    viewItemContainer: {
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
        backgroundColor: 'red',
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
    }

})
export default InProgressWorkScreen;