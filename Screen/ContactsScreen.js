import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const contactsData = [
    {
        "name": 'Bob',
        "number": '1234567890',
        "src": 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    },
    {
        "name": 'Mark',
        "number": '1234567890',
        "src": 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    },
    {
        "name": 'James',
        "number": '1234567890',
        "src": 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    },
    {
        "name": 'Robert',
        "number": '1234567890',
        "src": 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    },
    {
        "name": 'Riddhi',
        "number": '1234567890',
        "src": 'https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg',
    },
    {
        "name": 'Jahnavi',
        "number": '1234567890',
        "src": 'https://cdn-icons-png.flaticon.com/512/3600/3600926.png',
    },
    {
        "name": 'Shubham',
        "number": '1234567890',
        "src": 'https://i.pinimg.com/736x/09/24/a7/0924a7ef295741e916c8f42512bbe5bd.jpg',
    },
    {
        "name": 'Nirala',
        "number": '1234567890',
        "src": 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    },
    {
        "name": 'Om',
        "number": '1234567890',
        "src": 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    },
    {
        "name": 'Shanti',
        "number": '1234567890',
        "src": 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    },
    {
        "name": 'Mary',
        "number": '1234567890',
        "src": 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    },
    {
        "name": 'Lilla',
        "number": '1234567890',
        "src": 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    },
    {
        "name": 'Jones',
        "number": '1234567890',
        "src": 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    },
]

const Item = ({ item, onCalling }) => {
    return (
        <TouchableOpacity activeOpacity={0.5}
            onPress={() => { onCalling() }}>
            <View style={styles.viewItemContainer}>
                <Image
                    style={styles.imageContactStyle}
                    resizeMode='cover'
                    source={{ uri: item.src }} />
                <View style={styles.viewNameNumberStyle}>
                    <Text style={styles.textNameStyle}>{item.name}</Text>
                    <Text style={styles.textNumberStyle}>{item.number}</Text>
                </View>
                <View style={styles.view}>
                    {/* <Text>Edit</Text> */}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const ContactsScreen = ({ navigation }) => {

    const [searchText, setSearchText] = useState('')
    const [foundContacts, setFoundContacts] = useState(contactsData)

    const searchContacts = (searchText) => {
        setSearchText(searchText)
        var loclArray = [...contactsData]
        var selectedArray = []
        // console.log('localArray======', loclArray)
        selectedArray = loclArray.filter(elem => { return elem.name.match(searchText) })
        // console.log('selectedArray', selectedArray)
        setFoundContacts(selectedArray)
    }

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onCalling={() => {
                    navigation.navigate('Calling',
                        {
                            item: item //all data pass from contact list screen to calling screen
                        }
                    )
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.safeAreaViewStyle}>
            <View style={styles.viewSearchStyle}>
                <Image
                    style={styles.imageSearchStyle}
                    source={require('../assets/search-interface-symbol.png')} />
                <TextInput
                    style={styles.textInputSearchStyle}
                    placeholder='Search Contacts'
                    onChangeText={(searchText) => {
                        searchContacts(searchText)
                        /**setSearchText(searchText)*/
                    }}
                />
            </View>
            <FlatList
                data={foundContacts}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeAreaViewStyle: {
        // flex: 1,
        height: deviceHeight * 0.83,
    },
    viewItemContainer: {
        margin: 5,
        padding: 5,

        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    textNameStyle: {
        fontSize: 20,
        color: 'black',
    },
    textNumberStyle: {
        fontSize: 15,
    },
    imageContactStyle: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    viewNameNumberStyle: {
        alignSelf: 'center',
        marginLeft: 5,
    },
    viewSearchStyle: {
        padding: 10,
        backgroundColor: 'white',
        width: deviceWidth,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageSearchStyle: {
        width: 30,
        height: 30,
    },
    textInputSearchStyle: {
        backgroundColor: 'silver',
        borderRadius: 10,
        fontSize: 15,
        width: deviceWidth - 50,
        marginLeft: 5
    },
});

export default ContactsScreen;