import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ContactsScreen from './ContactsScreen';
import AuthNavigatorTab from '../MyApplication/Navigator/AuthNavigatorTab';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Tab = createMaterialBottomTabNavigator();

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.viewHomeStyle}>

            <TouchableOpacity style={styles.touchableCreateProfileBtn}
                onPress={() => navigation.navigate('Create Profile')} //go to HomeDetails123 named screen 
            >
                <Text style={styles.textCreateProfile}>Create Profile</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableProfileDetailsBtn}
                onPress={() => navigation.navigate('Profile')} //go to HomeDetails123 named screen 
            >
                <Text style={styles.textProfileDetails}>Profile</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableMenuBtn}
                onPress={() => navigation.navigate('HomeDetails123')} //go to HomeDetails123 named screen 
            >
                <Text style={styles.textProfileDetails}>Menu</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableYourOrdersBtn}
                onPress={() => navigation.navigate('HomeDetails123')} //go to HomeDetails123 named screen 
            >
                <Text style={styles.textProfileDetails}>Your Orders</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOrderHistoryBtn}
                onPress={() => navigation.navigate('HomeDetails123')} //go to HomeDetails123 named screen 
            >
                <Text style={styles.textProfileDetails}>Order History</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableManageAddressBtn}
                onPress={() => navigation.navigate('HomeDetails123')} //go to HomeDetails123 named screen 
            >
                <Text style={styles.textProfileDetails}>Add Address</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableContactBtn}
                onPress={() => navigation.navigate('Contacts')} //go to HomeDetails123 named screen 
            >
                <Text style={styles.textProfileDetails}>Contacts</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableContactBtn}
                onPress={() => navigation.navigate('Settings')} //go to HomeDetails123 named screen 
            >
                <Text style={styles.textProfileDetails}>Settings</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableContactBtn}
                onPress={() => navigation.navigate('New Contact')} //go to HomeDetails123 named screen 
            >
                <Text style={styles.textProfileDetails}>Create Contacts</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableContactBtn}
                onPress={() => navigation.navigate('To Do Task')} //go to HomeDetails123 named screen 
            >
                <Text style={styles.textProfileDetails}>TO-DO List</Text>

            </TouchableOpacity>


            {/* <AuthNavigatorTab/> */}
            {/* <Tab.Navigator barStyle={{ backgroundColor: 'red' }}>
                <Tab.Screen name='Contacts' component={ContactsScreen} 
                options={{
                    tabBarLabel:'Home',
                }}/>

            </Tab.Navigator> */}

        </View>




    );
}
const styles = StyleSheet.create({
    viewHomeStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    touchableCreateProfileBtn: {
        margin: 10,
        padding: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: (deviceWidth / 2) - 20,
        height: deviceHeight * 0.1,
        borderRadius: 10,
    },
    textCreateProfile: {
        fontSize: 25,
        color: 'white',
    },
    touchableProfileDetailsBtn: {
        margin: 10,
        padding: 10,
        backgroundColor: '#0d897b',
        alignItems: 'center',
        justifyContent: 'center',
        width: (deviceWidth / 2) - 20,
        height: deviceHeight * 0.1,
        borderRadius: 10,
    },
    textProfileDetails: {
        fontSize: 25,
        color: 'white',
    },
    touchableMenuBtn: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fd805c',
        alignItems: 'center',
        justifyContent: 'center',
        width: (deviceWidth / 2) - 20,
        height: deviceHeight * 0.1,
        borderRadius: 10,
    },
    touchableYourOrdersBtn: {
        margin: 10,
        padding: 10,
        backgroundColor: '#1a73e8',
        alignItems: 'center',
        justifyContent: 'center',
        width: (deviceWidth / 2) - 20,
        height: deviceHeight * 0.1,
        borderRadius: 10,
    },
    touchableOrderHistoryBtn: {
        margin: 10,
        padding: 10,
        backgroundColor: '#e14985',
        alignItems: 'center',
        justifyContent: 'center',
        width: (deviceWidth / 2) - 20,
        height: deviceHeight * 0.1,
        borderRadius: 10,
    },
    touchableManageAddressBtn: {
        margin: 10,
        padding: 10,
        backgroundColor: '#d64619',
        alignItems: 'center',
        justifyContent: 'center',
        width: (deviceWidth / 2) - 20,
        height: deviceHeight * 0.1,
        borderRadius: 10,
    },
    touchableContactBtn: {
        margin: 10,
        padding: 10,
        backgroundColor: '#7c5acc',
        alignItems: 'center',
        justifyContent: 'center',
        width: (deviceWidth / 2) - 20,
        height: deviceHeight * 0.125,
        borderRadius: 10,
    }

});
export default HomeScreen;