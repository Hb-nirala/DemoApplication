import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash/splash';
import UserNavigator from './User';
import Login from '../screens/Login/login';
import TermsandCondition from '../screens/Auth/TermsCondition';
import PrivacyPolicy from '../screens/Auth/PrivacyPolicy';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="UserNavigator" component={UserNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="TermsandCondition" component={TermsandCondition} options={{ headerShown: false }} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default AppRoutes;