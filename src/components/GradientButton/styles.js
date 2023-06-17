import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
export default StyleSheet.create({
    linearGradientStyle: {
        width: deviceWidth / 2,
        height: deviceHeight * 0.3,
    }
})