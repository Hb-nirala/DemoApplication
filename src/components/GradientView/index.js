import React from "react";
import { Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from "./styles";

const GradientView = ({ gradientStyle }) => {
    return (
        <LinearGradient colors={['#34ebb7', 'silver']} style={[styles.linearGradientStyle, gradientStyle]} start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}>
            <Text>Hello</Text>
        </LinearGradient >
    )
}
export default GradientView;