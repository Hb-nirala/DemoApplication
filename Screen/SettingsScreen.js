import * as React from 'react';
import { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    SectionList,
    Text,
    Image,
    TextInput,
    Dimensions
} from 'react-native';
// import { dataMenu } from './GlobalFunction';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const renderItem = ({ item }) => {
    return (
        <View>
            {/* <Text style={{fontSize:10,backgroundColor:'green',color:'white'}}>{item.title}</Text> */}
            <View style={styles.viewSettingsHeaderStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: item.src }}
                />
                <Text>{item.name}</Text>
            </View>

            {/* <FlatList
           data={item.resultData}
           renderItem={renderChildItem}
           keyExtractor={(item, index) => item + index}
           /> */}
        </View>
    )
}

const SettingsScreen = () => {
    const dataMenu = [
        {
            title: '',//user information
            data: [
                {
                    "name": 'UserNickName123',
                    "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_kvEn2iv1454nYa8Ih1-XNOnep967ppa6TSrkf0&s',
                }
            ]
        },
        {
            title: '',//Network
            data: [
                {
                    "name": 'Airplane Mode',
                    "src": 'https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=',

                },
                {
                    "name": 'Dual SIM',
                    "src": 'https://img.freepik.com/premium-vector/simcard-icon-vector-illustration_598213-5015.jpg',

                },
                {
                    "name": 'Wi-Fi',
                    "src": 'https://media.istockphoto.com/id/1341442664/vector/blue-wifi-sign-3d-icon-hotspot-for-digital-and-online-coverage.jpg?s=612x612&w=0&k=20&c=wekmNe_63KiXgl445N939UJ5OMVN3q8DqCpF2hPuuqs=',

                },
                {
                    "name": 'Bluetooth',
                    "src": 'https://cdn2.iconfinder.com/data/icons/circular-icon-set/256/Bluetooth.png',

                },
                {
                    "name": 'Other wireless connection',
                    "src": 'https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-13-512.png',

                }
            ]
        },
        {
            title: '',//mobile settings
            data: [
                {
                    "name": 'Notification & StatusBar',
                    "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNaN56Z6N_AsRI54f8FxsBZLqe_x6JxiR2zH4-KCNBJA&usqp=CAU&ec=48600112',
                },
                {
                    "name": 'Display & Brightness',
                    "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRwyzlINi0BiHYPKMiaTTEd08AD-J1jWvFUBIpP6g9qfghN_vDhh4an28FKR95oZEiNa7r3cOaPk&usqp=CAU&ec=48600112',
                },
                {
                    "name": 'Home Screen & Lock Screen Magazine',
                    "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK47fcTw8XPfUldfASMuFTSqSpK3GahGjy9auXobl9PA&usqp=CAU&ec=48600112',

                },
                {
                    "name": 'Sound & Vibration',
                    "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosbRuCHZBvIBov81Z9gFsgal1gQQ3tup41Zgus6eXz7v7FCajNLC4cvbMxXHB7jiooUjvyj1Ja5o&usqp=CAU&ec=48600112',

                },
                {
                    "name": 'Quiet Time',
                    "src": 'https://cdn-icons-png.flaticon.com/512/179/179295.png',

                },
            ]
        },
        {
            title: '',//access
            data: [
                {
                    "name": 'Fingerprint,Face & Passcode',
                    "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZz-Q5ij65lvRJj9jZVsAxarNCF01TkUBDA3m7OsHdtZ-1yQ3oxYW6qjw-QyFsQ6B7Xy6UZE3scw&usqp=CAU&ec=48600112',

                },
                {
                    "name": 'Smart & Convenient',
                    "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORsAXDUeHOgtPlVumV2Ytml1R5nExzJlVfc5BRoeeCA&usqp=CAU&ec=48600112',

                },
                {
                    "name": 'Security',
                    "src": 'https://cdn.dribbble.com/users/7056161/screenshots/15197253/media/04cd384c79f43073a7048477b7124795.jpg?compress=1&resize=400x300&vertical=top',

                },
                {
                    "name": 'Battery',
                    "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXby5lskWlA8NfuXove8Ur-v3Fdpz4zOdE3quB1LgflJ3wKO8Ce0QGbjD4rzd4sbn5Y5UZ1frl6hM&usqp=CAU&ec=48600112',

                },
                {
                    "name": 'Language & Region',
                    "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyclOXQNPwcSv8SLlLoK8BcKhJWEIBvcmz1XtJOs0fLg&usqp=CAU&ec=48600112',

                },
                {
                    "name": 'Additional Settings',
                    "src": 'https://icon-library.com/images/settings-icon/settings-icon-3.jpg',

                },


            ]
        },
        {
            title: '',//updates
            data: [
                {
                    "name": 'Software Updates',
                    "src": 'https://images.freeimages.com/fic/images/icons/1254/flurry_system/256/software_update.png',

                },
                {
                    "name": 'About Phone',
                    "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsluuBvsGNG5iEsTxefUhP7xSHy94z1XeJtaBIpLsIzOVCZDnD3h8gqbvVzGBYS_RatFs9xwKH3o&usqp=CAU&ec=48600112',

                },
            ]
        },
        {
            title: '',//other resource
            data: [
                {
                    "name": 'OPPO Cloud',
                    "src": 'https://cdn-icons-png.flaticon.com/512/252/252035.png',

                },
                {
                    "name": 'Accounts and Sync',
                    "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHfjJLTBMHPTtAQGKyDSwYrJoDVfCd8Hz671HMcEpJThpopPs9beJ2G71XQHc5fWkr-U6TMZ8sl0&usqp=CAU&ec=48600112',

                },
                {
                    "name": 'Google',
                    "src": 'https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-bleu.png',

                },
            ]
        },
        {
            title: '',//management
            data: [
                {
                    "name": 'App Management',
                    "src": 'https://img.freepik.com/premium-vector/4-red-dots-with-making-square-4-red-dots-icon_302321-1297.jpg',

                },
                {
                    "name": 'App Cloner',
                    "src": 'https://play-lh.googleusercontent.com/yOqzKtRYBwZ9KtLkXdp14N2hD1Z2F0D13HhFcARDZEeZOotoU0pqRXNvHeOQgb2I4eQ',

                },
                {
                    "name": '"Game Space"',
                    "src": 'https://spng.pinpng.com/pngs/s/100-1008470_controller-gamepad-video-games-computer-game-icon-games.png',

                },
                {
                    "name": 'App Split-screen',
                    "src": 'https://play-lh.googleusercontent.com/ftXrtVaiRSUL4vTVHJx538dyqdgvR13bbkZkQkz0Y5jco3c5cqZ2Z9L3RlIpnUISzn2-',

                },
            ]
        },
        {
            title: '',//system
            data: [
                {
                    "name": 'System Apps',
                    "src": 'https://cdn0.iconfinder.com/data/icons/file-management-system-flat/32/file_managemenr_system_icon_set_flat_style-14-512.png ',

                },
            ]
        },
    ];
    const [searchText, setSearchText] = useState('')

    const [foundText, setFoundText] = useState(dataMenu)

    React.useEffect(() => {
        // setFoundText(dataMenu)
    }, [])

    const searchMethod = (searchText) => {
        setSearchText(searchText)

        var loclArray = [...dataMenu]
        // console.log("data==========",loclArray);
        // console.log('elem 1   >>>>>', loclArray)
        // console.log('elem 2   >>>>>', searchText)
        let selectedArray = []
        for (var elem of loclArray) {
            // console.log('elem   >>>>>', elem.data.length)
            if (elem.data.length > 0) {
                selectedArray = elem.data.filter((innerelem) => {
                    return innerelem.name.match(searchText)
                })
                elem.data = selectedArray;
                // console.log('selected array is ', selectedArray)
            }

        }
        // console.log("loclArray",loclArray);
        setFoundText(loclArray)
        // setFoundText(selectedArray)
    }

    return (
        <SafeAreaView style={styles.viewSettingsContainerStyle}>
            <View style={styles.viewSearchStyle}>
                <Image
                    style={styles.imageSearchStyle}
                    source={require('../assets/search-interface-symbol.png')} />
                <TextInput
                    style={styles.textInputSearchStyle}
                    placeholder='Search Settings'
                    onChangeText={(searchText) => {
                        searchMethod(searchText)
                        /**setSearchText(searchText)*/
                    }}
                />
            </View>
            <SectionList
                sections={foundText}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    viewSettingsContainerStyle: {
        flex: 1,
        backgroundColor: 'silver',
    },
    imageStyle: {
        height: 30,
        width: 30,
        margin: 10,
        borderRadius: 15,
    },
    viewSettingsHeaderStyle: {
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
    },
    textInputSearchStyle: {
        backgroundColor: 'silver',
        borderRadius: 10,
        fontSize: 15,
        width: deviceWidth - 50,
        marginLeft: 5
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
    }
});

export default SettingsScreen;