import { TextInput as PaperTextInput } from 'react-native-paper'
import React from 'react'
import styles from './styles'

const CustomTextInput = ({ style, ...rest }) => {
    return (
        <PaperTextInput style={[styles.textInputStyle, style]} {...rest} />
    )
}
export default CustomTextInput