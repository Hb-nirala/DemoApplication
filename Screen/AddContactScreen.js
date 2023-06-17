import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const AddContactScreen = () => {
    return (
        <View>
            <View>
                <Image
                    resizeMode='cover'
                    style={styles.imageAddContactStyle}
                    source={require('../assets/add.png')} />
            </View>

            <View style={styles.viewContactStyle}>
                <TextInput

                    style={styles.textInputContactStyle}
                    placeholder='First Name' />
                <TextInput
                    style={styles.textInputContactStyle}
                    placeholder='Last Name' />
                <TextInput
                    style={styles.textInputContactStyle}
                    placeholder='Company' />
                <TextInput
                    style={styles.textInputContactStyle}
                    placeholder='Title' />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    imageAddContactStyle: {
        marginTop: 10,
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    textInputContactStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'greay',
        fontSize: 18,
    },
    viewContactStyle: {
        marginLeft: 5,
        width: deviceWidth - 5,
    }

});

export default AddContactScreen;