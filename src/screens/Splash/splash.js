import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Splash = (props) => {

    setTimeout(() => {
        props.navigation.navigate('Login')
    }, 3000)

    return (
        <View>
            <Text>splash</Text>
            <Button style={{ marginTop: 30 }} onPress={() => { }}>
                Login
            </Button>
        </View>
    )
}

export default Splash