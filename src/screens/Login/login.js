import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button, Checkbox, TextInput } from 'react-native-paper'
import { Formik } from 'formik'
import AppContext from '../../Context/AppContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AsyncStore from '../../lib/AsyncStore'

const Login = (props) => {
    const { loginValidationSchema,
        checkboxStatus,
        onLoginClick,
        setLocalLoginData,
        setLoginData,
        loginData,
        setCheckBoxStatus } = useContext(AppContext)
    useEffect(() => {
        getData()
    }, [])

    // console.log("LoginData", loginData);
    const getData = async () => {
        const userLoginData = await AsyncStorage.getItem('loginData')
        if (userLoginData != null) {
            // console.log("userLoginData", userLoginData);
            const getChekData = await AsyncStorage.getItem(AsyncStore.react_native,);
            getChekData === 'checked' ? setCheckBoxStatus('checked') : setCheckBoxStatus('unchecked')
            setLoginData(JSON.parse(userLoginData))
            // console.log("Login data", loginData.email);
            props.navigation.navigate('UserNavigator')
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
                        <Checkbox
                            onPress={() => { checkboxStatus === 'checked' ? setCheckBoxStatus('unchecked') : setCheckBoxStatus('checked') }}
                            status={checkboxStatus} />
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