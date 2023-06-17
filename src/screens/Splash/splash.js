import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Splash = (props) => {
    return (
        <View>
            <Text>splash</Text>
            <Button style={{ marginTop: 30 }} onPress={() => { props.navigation.navigate('Login') }}>
                Login
            </Button>
        </View>
    )
}

export default Splash