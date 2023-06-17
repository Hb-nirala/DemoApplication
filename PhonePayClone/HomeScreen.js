import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Appbar, Avatar, Provider, } from 'react-native-paper';
import BottomNavigationClone from './Navigator/BottomNavigator';

const HomeScreen = () => {

    return (
        <Provider>

            <ScrollView>

                <StatusBar
                    animated={true}
                    backgroundColor="#522f93"
                />

                <Appbar.Header style={{ backgroundColor: '#522f93' }}>

                    <Avatar.Image
                        size={60}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg' }} />

                    <Appbar.Content
                        titleStyle={{ fontSize: 20, fontWeight: 'bold' }}
                        color='white'
                        title="Add Address"
                    />

                    <Appbar.Action
                        color='white'
                        icon="qrcode-scan"
                    />

                    <Appbar.Action
                        color='white'
                        icon="bell-outline"
                    />

                    <Appbar.Action
                        color='white'
                        icon="information-outline"
                    />

                </Appbar.Header>

            </ScrollView>

            <BottomNavigationClone />

        </Provider>
    )
}
export default HomeScreen;