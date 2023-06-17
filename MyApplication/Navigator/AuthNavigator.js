import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import AuthNavigatorTab from './AuthNavigatorTab';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={AuthNavigatorTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AuthNavigator;