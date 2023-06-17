import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const ToDoListScreen = (props) => {

    const [dataInfo, setDataInfo] = useState([])

    // const edit = (item) => {
    //     var tempArr = [...dataInfo]
    //     if (tempArr.length > 0) {
    //         for (var elem of tempArr) {
    //             if (elem.id == item.id) {
    //                 // console.log('edit elem is ====', item)
    //                 props.navigation.navigate('Add Task', { item })
    //             }
    //         }
    //     }
    // }

    const deleteItem = (item) => {
        let localArr = [...dataInfo]
        for (var ele of localArr) {
            if (ele.id == item.id) {
                localArr.splice(item, 1)
            }
        }
        // console.log('local Array is ', localArr)
        setDataInfo(localArr)
    }

    const Item = ({ item }) => {
        return (
            <View style={styles.viewItemStyle}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('Add Task', { onUpdateData, item: item })
                }}
                    onLongPress={() => { deleteItem(item) }}>
                    <Text style={styles.textNameStyle}>Name : - {item.name}</Text>
                    <Text style={styles.textDetailsStyle}>Details : {item.details}</Text>
                    <Text style={styles.textDescriptionStyle}>Description : {item.description}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const onPressData = (data) => {
        var localArray = [...dataInfo]
        localArray.push(data)
        setDataInfo(localArray)
    }

    const onUpdateData = (data) => {
        // console.log('update data', data)
        var localUpdateArr = [...dataInfo]
        localUpdateArr.forEach((elem2, index) => {
            if (elem2.id == data.id) {
                // console.log("elem2.id", elem2);
                // console.log("data.id", data);
                localUpdateArr[index] = data
            }
        })
        // console.log('localUpdateArr', localUpdateArr)
        setDataInfo(localUpdateArr)
    }
    return (
        <View style={styles.viewToDoContainerStyle}>

            <View style={styles.viewHeaderStyle}>

                <Text style={styles.textHeaderStyle}>Today</Text>

                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('Add Task', {
                            onPressData, id: (dataInfo.length) + 1
                        })
                    }}
                    style={styles.touchableOpacityAddNewBtn}>
                    <Text style={styles.textBtnStyle}>Add New</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.viewItemContainerStyle}>
                <FlatList
                    data={dataInfo}
                    renderItem={Item}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewToDoContainerStyle: {
        flex: 1,
        backgroundColor: '#4044c9',
    },
    viewItemContainerStyle: {
        top: deviceHeight * 0.2,
        backgroundColor: 'white',
        height: deviceHeight * 0.54,
        borderTopLeftRadius: deviceWidth * 0.2,
    },
    textHeaderStyle: {
        color: 'white',
        fontSize: 30,
    },
    viewHeaderStyle: {
        top: 50,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: deviceWidth - 30
    },
    touchableOpacityAddNewBtn: {
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    textBtnStyle: {
        fontSize: 30,
    },
    textNameStyle: {
        color: 'black',
        fontSize: 20,
    },
    viewItemStyle: {
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
    }
});
export default ToDoListScreen;