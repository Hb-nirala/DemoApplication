import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import IconSecond from 'react-native-vector-icons/AntDesign';
import HomeScreenClone from '../Screens/HomeScreenClone';
import AboutScreen from '../Screens/AboutScreen';
import LoginScreen from '../Screens/LoginScreen';
import LogOutScreen from '../Screens/LogOutScreen';
import SignUpScreenClone from '../Screens/SignUpScreenClone';
import AuthNavigator from './AuthNavigator';





const Drawer = createDrawerNavigator();

const AuthNavigatorDrawer = () => {
    return (
        <Drawer.Navigator>
            {/* <Drawer.Screen name='Home' component={HomeScreenClone}
                options={{
                    drawerIcon: ({ }) => (<Icon name="home" size={20} />)
                }} /> */}
            {/* <Drawer.Screen name='About' component={AboutScreen}
                options={{
                    drawerIcon: ({ }) => (<IconSecond name="search1" size={20} />)
                }} /> */}
            {/* <Drawer.Screen name='Login' component={LoginScreen}
                options={{
                    drawerIcon: ({ }) => (<IconSecond name="login" size={20} />)
                }} /> */}
            {/* <Drawer.Screen name='Logout' component={LogOutScreen}
                options={{
                    drawerIcon: ({ }) => (<IconSecond name="logout" size={20} />)
                }} /> */}
            {/* <Drawer.Screen name='SignUp' component={SignUpScreenClone}
                options={{
                    drawerIcon: ({ }) => (<IconSecond name="logout" size={20} />)
                }} /> */}
        </Drawer.Navigator>
    )
}
export default AuthNavigatorDrawer;
