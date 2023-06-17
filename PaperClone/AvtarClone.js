import React from "react";
import { Avatar, Provider } from 'react-native-paper';

const AvtarClone = () => {
    return (
        <Provider>
            <Avatar.Icon size={24} icon="folder" />
            <Avatar.Image size={60} source={require('../assets/facebook.png')} />
            <Avatar.Text size={50} label="N" />
            <Avatar.Image size={60} source={{ uri: 'https://www.freakingtech.com/wp-content/uploads/2020/07/cat.jpg' }} />
        </Provider>
    )
}
export default AvtarClone;