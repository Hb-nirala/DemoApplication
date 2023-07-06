import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import PropTypes from 'prop-types';

const FontRegularText = ({ style, ...rest }) => {
    return (
        <View>
            <Text style={[styles.fontRegularTextStyle, style]} {...rest} />
        </View>
    )
}
FontRegularText.propTypes={
    style: Text.propTypes.style,
}
export default FontRegularText