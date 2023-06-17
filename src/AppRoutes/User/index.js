import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from '../../screens/User/user';
import PDF from '../../screens/User/PDF/pdf';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
            <Stack.Screen name="PDF" component={PDF} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default UserNavigator