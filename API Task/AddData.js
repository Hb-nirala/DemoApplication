import React, { useState } from "react";
import { View, Text, Alert } from 'react-native';
import { Button, TextInput } from "react-native-paper";

const AddData = (props) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [city, setCity] = useState('')


    const url = 'https://crudcrud.com/api/1e9a9ed73eb34f0daa3bf2022ba06b5d/unicorns';
    
    const postDataIntoApi = () => {
        var data = { Name: name, PhoneNumber: number, City: city }
        var dataForm = []
        dataForm = JSON.stringify(data)
        fetch(url, {
            method: 'POST',
            body: dataForm,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((responseJson) => { props.route.params.takeData(responseJson); console.log('responseJson==', responseJson) })
            .catch((error) => { console.log('error', error) })
        props.navigation.navigate('showData');
    }


    return (
        <View style={{ margin: 5 }}>

            <TextInput
                style={{ margin: 5 }}
                placeholder="Enter Name"
                onChangeText={(name) => { setName(name) }}
                value={name}
            />

            <TextInput
                style={{ margin: 5 }}
                placeholder="Enter Number"
                onChangeText={(number) => { setNumber(number) }}
                value={number}
            />

            <TextInput
                style={{ margin: 5 }}
                placeholder="Enter City"
                onChangeText={(city) => { setCity(city) }}
                value={city}
            />

            <Button mode="contained"
                onPress={() => { postDataIntoApi() }}>
                Add</Button>

        </View>
    )
}
export default AddData;