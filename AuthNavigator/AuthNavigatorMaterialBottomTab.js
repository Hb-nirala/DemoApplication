import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ContactsScreen from '../Screen/ContactsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import IconSecond from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screen/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const AuthNavigatorMaterialBottomTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                labeled={false}
            // barStyle={{ backgroundColor: 'yellow' }}
            >
                <Tab.Screen name='home' component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        // labeled "false" for hide all tabs label,
                        backgroundColor: 'yellow',
                        // tabBarBadge:20, //adding badge 
                        tabBarIcon: ({ color, size, focused }) => (focused ? <Icon name="home" color="blue" size={20} /> : <Icon name="home" size={20} />)
                    }}
                />
                <Tab.Screen name='Contacts' component={ContactsScreen}
                    options={{
                        tabBarLabel: 'contacts',
                        backgroundColor: 'green',
                        tabBarIcon: ({ color, size, focused }) => (focused ? <IconSecond name="contacts" color='blue' size={20} /> : <IconSecond name="contacts" size={20} />)
                    }} />

                <Tab.Screen name='Contacts' component={ContactsScreen}
                    options={{
                        tabBarLabel: 'contacts',
                        backgroundColor: 'green',
                        tabBarIcon: ({ color, size, focused }) => (focused ? <IconSecond name="contacts" color='blue' size={20} /> : <IconSecond name="contacts" size={20} />)
                    }} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}
export default AuthNavigatorMaterialBottomTab;