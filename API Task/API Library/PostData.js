import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import axios from 'axios';
import GlobalFile from '../../lib/GlobalFile';

// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     console.log('config.headers====', config.headers)
//     config.headers['ok']='Hello';
//     console.log('config---',config)
//     return config;
// }, function (error) {
//     // Do something with request error 
//     return Promise.reject(error);
// });

// Add a response interceptor
// axios.interceptors.response.use(function (response) {

    
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     console.log('response---config--', response);
//     return response;
// }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
// });


const PostData = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const baseUrl = "https://crudcrud.com";

    
    //Post data through axios into API
    // const postRequest = async () => {
    //     var data = { Name: name, Age: age }
    //     await axios.post(`${baseUrl}/api/692a2b168b2849398b299bb5b65480f9/unicorns`,
    //         data,
    //     ).then(function (response) {
    //         console.log('response--->', JSON.stringify(response));
    //     })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    useEffect(() => {
        // getResponse();
        getDataInterceptors();
    }, [])

    //get data from API Using axios 
    // const getResponse = async () => {
    //     await axios.get(`${baseUrl}/api/692a2b168b2849398b299bb5b65480f9/unicorns`,)
    //         .then((reasponse) => { console.log('response-get-->', JSON.stringify(reasponse.data)); })
    // }

    // Post data through axios into API with Interceptors
    const postDataInterceptors = () => {
        var data = { Name: name, Age: age }
        axios({
            method: 'post',
            url: `${baseUrl}/api/692a2b168b2849398b299bb5b65480f9/unicorns`,
            data: data,
        }).then((response) => { ( JSON.stringify(response.data)) }).catch(function (error) {
            // console.log('error-----', error)
        })
    }

    //get data from API Using axios with Interceptors
    const getDataInterceptors = () => {
        axios({
            
            url: `${baseUrl}/api/692a2b168b2849398b299bb5b65480f9/unicorns`,
            // responseType: 'stream',
        }).then((response) => { ( JSON.stringify(response.data)) })
        // .then(function (response) {
        //     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        // })
    }


    return (
        <View>
            <Text>Hello</Text>
            <TextInput
                placeholder='Enter Name'
                onChangeText={(name) => { setName(name) }}
                value={name}
            />
            <TextInput
                placeholder='Enter Age'
                onChangeText={(age) => { setAge(age) }}
                value={age}
            />

            <Button
                onPress={() => { postDataInterceptors() }}>
                Submit
            </Button>

        </View>
    )
}
export default PostData;