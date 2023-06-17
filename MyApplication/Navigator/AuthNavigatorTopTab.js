import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CompletedWorkScreen from '../Screens/CompletedWorkScreen';
import InProgressWorkScreen from '../Screens/InProgressWorkScreen';

const Tab = createMaterialTopTabNavigator();

const AuthNavigatorTopTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Complete" component={CompletedWorkScreen} />
            <Tab.Screen name="InProgress" component={InProgressWorkScreen} />
        </Tab.Navigator>
    )
}
export default AuthNavigatorTopTab;