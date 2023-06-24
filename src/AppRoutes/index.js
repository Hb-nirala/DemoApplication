import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash/splash';
import UserNavigator from './User';
import Login from '../screens/Login/login';
import User from '../screens/User/user';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
            <Stack.Screen name="UserNavigator" component={UserNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}
export default AppRoutes;