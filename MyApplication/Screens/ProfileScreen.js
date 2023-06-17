import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';

const ProfileScreen = (props) => {

    return (
        <View style={styles.viewProfileStyle}>
            <Image
                style={styles.imageProfileStyle}
                source={{ uri: 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg' }}>
            </Image>
            <Text style={styles.textProfileName}>{props?.route?.params?.username}</Text>
            <Text style={styles.textProfileName}>{props?.route?.params?.password}</Text>


        </View>
    )
};

const styles = StyleSheet.create({
    viewProfileStyle: {

    },
    imageProfileStyle: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        marginTop: 30,
        borderRadius: 50,
    },
    textProfileName: {
        marginTop: 20,
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    }
});

export default ProfileScreen;