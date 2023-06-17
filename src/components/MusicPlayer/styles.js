import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
export default StyleSheet.create({
    paperButtonStyle: {
        width: deviceWidth * 0.5,
        padding: 10,
        margin: 10,
        alignSelf: 'center'
    },
    timeStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    imageStyle: {
        marginTop:50,
        width: 100,
        height: 100,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 50
    },
    textStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    timeStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        alignSelf: 'center'
    },
    timeTextStyle: {
        fontSize: 12,
        color: 'white'
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})