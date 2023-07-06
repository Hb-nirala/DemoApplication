import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Checkbox, TextInput } from 'react-native-paper'
import { Formik } from 'formik'
import AppContext from '../../Context/AppContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AsyncStore from '../../lib/AsyncStore'
import DropDownList from '../../components/DropDownList'
import FontRegularText from '../../components/core/FontRegularText'
import CustomTextInput from '../../components/core/CustomTextInput'

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
    // {onLoginClick(values, props)}
    return (
        <View>
            <Formik
                initialValues={{ email: '', password: '', checkbox: false, DropdownItem: '' }}
                onSubmit={values => { console.log("values==", values); }}
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
                        {/* <Checkbox
                            onPress={() => { checkboxStatus === 'checked' ? setCheckBoxStatus('unchecked') : setCheckBoxStatus('checked') }}
                            status={checkboxStatus}
                        /> */}

                        <Checkbox
                            onPress={() => {
                                setFieldValue('checkbox', !values.checkbox)
                            }}
                            status={values.checkbox ? 'checked' : 'unchecked'}
                            value={values.checkbox}
                        />
                        {errors.checkbox ? <Text>{errors.checkbox}</Text> : null}

                        <DropDownList
                            onChange={(data) => { setFieldValue("DropdownItem", data.label); }} />
                        {errors.DropdownItem ? <Text>{errors.DropdownItem}</Text> : null}

                        <Button style={{ marginTop: 30 }} onPress={handleSubmit}>
                            Login
                        </Button>
                    </View>
                }
            </Formik>
            <FontRegularText>Hello Nirala</FontRegularText>
            <CustomTextInput 
            placeholder={'name'}/>
        </View>
    )
}

export default Login;