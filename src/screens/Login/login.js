import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { Formik } from 'formik'
import AppContext from '../../Context/AppContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = (props) => {
    const { loginValidationSchema, onLoginClick, setLocalLoginData, setLoginData } = useContext(AppContext)
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const userLoginData = await AsyncStorage.getItem('loginData')
        if (userLoginData) {
            setLoginData(JSON.parse(userLoginData))
            props.navigation.navigate('User')
        }
        else {
            console.log("Stay login");
        }
    }

    return (
        <View>
            <Text>Login</Text>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => { onLoginClick(values, props) }}
                validationSchema={loginValidationSchema}
            >
                {({
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    touched,
                    values,
                    errors,
                    isValid
                }) =>
                    <View>
                        <TextInput placeholder='email'
                            onChangeText={(text) => { setFieldValue('email', text) }}
                            value={values.email}
                        />
                        {errors.email ? <Text>{errors.email}</Text> : ''}

                        <TextInput placeholder='password'
                            onChangeText={(text) => { setFieldValue('password', text) }}
                            value={values.password}
                        />
                        {errors.password ? <Text>{errors.password}</Text> : ''}
                        <Button style={{ marginTop: 30 }} onPress={handleSubmit}>
                            Login
                        </Button>
                    </View>
                }
            </Formik>
        </View>
    )
}

export default Login;