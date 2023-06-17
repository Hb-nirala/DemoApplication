import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const User = (props) => {
    return (
        <View>
            <Text> User</Text>
            <Button style={{ marginTop: 30 }} onPress={() => { props.navigation.navigate('PDF') }}>
                PDF
            </Button>
        </View>
    )
}
export default User