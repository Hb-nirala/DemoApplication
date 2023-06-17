import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from './DashBoard';
import MusicPlayer from './index';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DashBoard'>
                <Stack.Screen name="DashBoard" component={DashBoard} />
                <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigators;