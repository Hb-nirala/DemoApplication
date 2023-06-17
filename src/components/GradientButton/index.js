import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Title } from 'react-native-paper';
import styles from './styles';
const GradientButton = (buttonTitle) => {
    return (
        <LinearGradient style={styles.linearGradientStyle}>
            <Button>{buttonTitle}</Button>
        </LinearGradient>
    )
}
export default GradientButton;