import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Checkbox, TextInput } from 'react-native-paper'
import { Formik } from 'formik'
import AppContext from '../../Context/AppContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AsyncStore from '../../lib/AsyncStore'
import DropDownList from '../../components/DropDownList'
import FontRegularText from '../../components/core/FontRegularText'
import CustomTextInput from '../../components/core/CustomTextInput'
import { appDimension } from '../../lib/globalConstant'

const Login = (props) => {

    const { loginValidationSchema,
        checkboxStatus,
        onLoginClick,
        setLocalLoginData,
        setLoginData,
        loginData,
        PrivacyPolicyClick,
        TermsandConditionClick,
        setCheckBoxStatus } = useContext(AppContext)
    useEffect(() => {
        getData()
    }, [])

    // console.log("LoginData", loginData);
    const getData = async () => {
        const userLoginData = await AsyncStorage.getItem('loginData')
        console.log("userLoginData", userLoginData);
        if (userLoginData != null) {
            // console.log("userLoginData", userLoginData);
            // const getChekData = await AsyncStorage.getItem(AsyncStore.react_native,);
            // getChekData === 'checked' ? setCheckBoxStatus('checked') : setCheckBoxStatus('unchecked')
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
        <View style={styles.containerStyle}>
            <Formik
                initialValues={{ email: '', password: '', checkbox: false, }}
                onSubmit={(values) => { onLoginClick(values,props) }}
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
                    <>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder='email'
                            onChangeText={(text) => { setFieldValue('email', text) }}
                            value={values.email}
                        />
                        {errors.email ? <Text style={styles.errorsTextStyle}>{errors.email}</Text> : ''}

                        <TextInput
                            style={styles.textInputStyle}
                            placeholder='password'
                            onChangeText={(text) => { setFieldValue('password', text) }}
                            value={values.password}
                        />
                        {errors.password ? <Text style={styles.errorsTextStyle}>{errors.password}</Text> : ''}
                        {/* <Checkbox
                            onPress={() => { checkboxStatus === 'checked' ? setCheckBoxStatus('unchecked') : setCheckBoxStatus('checked') }}
                            status={checkboxStatus}
                        /> */}

                        <View style={styles.checkboxWithTerms}>
                            <Pressable style={styles.checkboxWithText} onPress={() => {
                                setFieldValue('checkbox', !values.checkbox)
                            }}>
                                <Checkbox
                                    status={values.checkbox ? 'checked' : 'unchecked'}
                                    value={values.checkbox}
                                />
                                <Text style={styles.checkboxTextColor}>I am not a robot</Text>
                                {/* {errors.checkbox ? <Text>{errors.checkbox}</Text> : null} */}
                            </Pressable>
                            <View style={styles.termsConditionViewStyle}>
                                <FontRegularText
                                    style={styles.textStyle}
                                    onPress={() => { TermsandConditionClick(props) }}>Terms & Condition</FontRegularText>
                                <FontRegularText
                                    style={styles.textStyle}
                                    onPress={() => { PrivacyPolicyClick(props) }}>Privacy Policy</FontRegularText>
                            </View>
                        </View>

                        {/* <DropDownList
                            onChange={(data) => { setFieldValue("DropdownItem", data.label); }} />
                        {errors.DropdownItem ? <Text>{errors.DropdownItem}</Text> : null} */}

                        <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
                            <Text style={styles.buttonTextStyle}>Login</Text>
                        </TouchableOpacity>
                    </>
                }
            </Formik>
            {/* <FontRegularText>Hello Nirala</FontRegularText>
            <CustomTextInput
                placeholder={'name'} /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: 'white',
        width: appDimension.deviceWidth - 20,
        marginVertical: 10,
        alignSelf: 'center',
    },
    checkboxWithText: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 5,
        // backgroundColor: 'red',
        alignItems: 'center'
    },
    containerStyle: {
        flex: 1,
        backgroundColor: 'silver',
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonStyle: {
        backgroundColor: 'green',
        padding: 10,
        marginHorizontal: 10,
        marginTop: appDimension.deviceHeight * 0.2,
        alignItems: 'center',
        width: appDimension.deviceWidth * 0.5,
        alignSelf: 'center',
        borderRadius: 15,
    },
    checkboxTextColor: {
        color: 'black'
    },
    termsConditionViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: appDimension.deviceWidth * 0.52,
    },
    checkboxWithTerms: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    errorsTextStyle: {
        color: 'red',
        marginHorizontal: 10,
    },
    textStyle: {
        color: 'blue'
    }
})
export default Login;