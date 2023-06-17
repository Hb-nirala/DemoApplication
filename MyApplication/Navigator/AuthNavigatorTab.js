import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import IconSecond from 'react-native-vector-icons/MaterialIcons';
import IconThird from 'react-native-vector-icons/Foundation';
import ProfileScreen from '../Screens/ProfileScreen';
import VideoScreenClone from '../Screens/VideoScreenClone';
import AuthNavigatorTopTab from './AuthNavigatorTopTab';
import HomeScreenClone from '../Screens/HomeScreenClone';

const Tab = createBottomTabNavigator();

const AuthNavigatorTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreenClone}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (focused ? < Icon name='home' color={'#56a7e9'} size={20} /> : < Icon name='home' size={20} />)
                }}
            />
            <Tab.Screen name='My Work' component={AuthNavigatorTopTab}
                options={{
                    tabBarLabel: 'My Work',
                    tabBarIcon: ({ focused, color, size }) => (focused ? < IconSecond name='work' color={'#56a7e9'} size={20} /> : < IconSecond name='work' size={20} />)
                }}
            />
            <Tab.Screen name='Profile' component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused, color, size }) => (focused ? < Icon name='person-circle' color={'#56a7e9'} size={20} /> : < Icon name='person-circle' size={20} />)
                }}
            />
            <Tab.Screen name='Video' component={VideoScreenClone}
                options={{
                    tabBarLabel: 'Video',
                    tabBarIcon: ({ focused, color, size }) => (focused ? < IconThird name='video' color={'#56a7e9'} size={20} /> : < IconThird name='video' size={20} />)
                }}
            />
        </Tab.Navigator>
    )
}
export default AuthNavigatorTab;