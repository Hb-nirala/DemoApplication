import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowData from './ShowData';
import AddData from './AddData';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="showData" component={ShowData} />
                <Stack.Screen name="AddData" component={AddData} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigator;