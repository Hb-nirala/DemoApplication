import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Login = (props) => {
    return (
        <View>
            <Text> Login</Text>
            <Button style={{ marginTop: 30 }} onPress={() => { props.navigation.navigate('User') }}>
                User
            </Button>
        </View>
    )
}

export default Login;