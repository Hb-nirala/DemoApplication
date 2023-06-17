import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen';
import HomeDetails from '../Screen/HomeDetails';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="HomeDetails123" component={HomeDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default HomeNavigator;