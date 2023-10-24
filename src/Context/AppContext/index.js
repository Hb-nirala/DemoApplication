import React, { createContext, useMemo, useState } from 'react'
import * as yup from 'yup'
import AsyncStore from '../../lib/AsyncStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownList from '../../components/DropDownList';

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
    const [loginData, setLoginData] = useState({})
    const [localLoginData, setLocalLoginData] = useState({})
    const [checkboxStatus, setCheckBoxStatus] = useState('unchecked')

    const appBarClick = () => {
        console.log("appBarClick======");
    }

    const onLoginClick = (values, props) => {
        console.log("values==",JSON.stringify(values));
        setLoginData(values)
        storeLoginData(values)
        props.navigation.navigate('UserNavigator', { values })
    }

    const storeLoginData = async (values) => {
        // if (checkboxStatus === 'checked') {
            await AsyncStorage.setItem(AsyncStore.react_native, 'checked')
            await AsyncStorage.setItem('loginData', JSON.stringify(values))
            console.log("storeLoginData====",JSON.stringify(values));
        // }
        // else {
        //     await AsyncStorage.setItem(AsyncStore.react_native, 'unchecked')
        //     // console.log('Hii');
        // }
        // console.log("========", await AsyncStorage.setItem('loginData', JSON.stringify(values)));
    }

    const onLogoutClick = async (props) => {
        setLoginData('')
        await AsyncStorage.removeItem('loginData')
        props.navigation.navigate('Login')
    }
    const TermsandConditionClick = (props) =>{
        props.navigation.navigate('TermsandCondition')
    }
    const PrivacyPolicyClick =(props) =>{
        props.navigation.navigate('PrivacyPolicy')
    }

    // var regex = /\d/;
    // var required = 'please enter email required'
    // var validErrorMessage = "Password must have a number"

    // const formValidation = ({ required, regex, validErrorMessage }) => {
    //     yup.string().matches(regex, validErrorMessage).min(8, ({ min }) =>
    //         `Password must be at least ${min} characters`).required(required)
    // }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    const loginValidationSchema = yup.object().shape({

        email: yup.string().matches(emailRegex, "please enter valid email")
            .required('please enter email'),

        //Minimum eight characters, at least one letter, one number and one special character:
        password: yup.string().matches(passwordRegex, "please enter valid password")
            .required('please enter password'),

        checkbox: yup.boolean().oneOf([true], 'enable terms & condition'),
        // DropdownItem: yup.string().required('please Select one')
        // email: formValidation({
        //     required:'please enter email required',
        //     regex : /\d/,
        //     validErrorMessage:"Password must have a number"
        // }),

        // email: formValidation({
        //     required: 'please enter email',
        //     regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //     validErrorMessage: 'please enter valid email'
        // }),

        // password: formValidation({
        //     required: 'please enter password',
        //     regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        //     validErrorMessage: 'please enter valid password'
        // })

    })

    const contextPayload = useMemo(() =>
    ({
        //Schema
        loginValidationSchema,

        //State
        loginData, setLoginData,
        localLoginData, setLocalLoginData,
        checkboxStatus, setCheckBoxStatus,

        //variable

        //function
        appBarClick,
        onLoginClick,
        onLogoutClick,
        TermsandConditionClick,
        PrivacyPolicyClick
    }),
        [
            //Schema
            loginValidationSchema,

            //State
            loginData, setLoginData,
            localLoginData, setLocalLoginData,
            checkboxStatus, setCheckBoxStatus,

            //variable

            //function
            appBarClick,
            onLoginClick,
            onLogoutClick,
            TermsandConditionClick,
            PrivacyPolicyClick
        ])

    return (
        <AppContext.Provider value={contextPayload}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
