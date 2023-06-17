import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, FlatList } from 'react-native';
import { Button, ActivityIndicator, Modal } from "react-native-paper";

const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const ShowData = (props) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setVisible(true)
        getDataFromApi()
        // console.log("data",data);
        // setApiId(data[0]._id ? data[0]._id:null)
    }, [])

    const url = 'https://crudcrud.com/api/1e9a9ed73eb34f0daa3bf2022ba06b5d/unicorns';

    const getDataFromApi = async () => {
        const response = await fetch(url);
        const responseData = await response.json()
        console.log('Get Response Data---', JSON.stringify(responseData))
        setData(responseData)
        setIsLoading(false)
        setVisible(false)
        // setApiId(responseData && responseData[0]._id ? responseData[0]._id : null)
        // setName(responseData && responseData[0].Name ? responseData[0].Name : null)
        // setAge(responseData && responseData[0].Age ? responseData[0].Age : null)
        // setId(responseData && responseData[0].userId ? responseData[0].userId : null)
    }

    const takeData = () => {
        setIsLoading(false)
        getDataFromApi()
    }

    const deleteData = (_id) => {
        // console.log('_id', typeof _id);
        fetch(url + '/' + _id, {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
        }).then(res => (console.log("res", JSON.stringify(res))))
            .then(res =>
            (getDataFromApi(), setIsLoading(true), setVisible(true),
                console.log('delete', res)))
            .catch((error) => {
                console.error('error', error);
            });
    }

    const Item = ({ item }) => (
        <View style={{ margin: 5, padding: 5, borderWidth: 2, borderRadius: 5 }}>
            <View>
                <Text style={{ margin: 5 }}>API ID :- {item._id}</Text>
                <Text style={{ margin: 5 }}>Name :- {item.Name}</Text>
                <Text style={{ margin: 5 }}>Phone :- {item.PhoneNumber}</Text>
                <Text style={{ margin: 5 }}>City :- {item.City}</Text>
            </View>
            <Button
                style={{ width: screenWidth * 0.5, alignSelf: 'center', margin: 5 }}
                mode='contained-tonal'
                onPress={() => { deleteData(item._id) }}
            >DELETE</Button>
        </View>
    );

    return (
        <View>



            <Button
                style={{ width: screenWidth * 0.5, alignSelf: 'center', margin: 5 }}
                mode="contained"
                onPress={() => { props.navigation.navigate('AddData', { takeData }) }}>
                Add Data</Button>

            <View style={{ width: screenWidth, height: screenHeight * 0.75 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Item item={item} />}
                />
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}>
                <ActivityIndicator animating={isLoading} size={"large"} color={'white'} />
            </Modal>

        </View>
    )
}
export default ShowData;