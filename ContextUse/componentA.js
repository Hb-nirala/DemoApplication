import { View, Text, Button } from 'react-native'
import React from 'react'
import { useMainContext } from './mainComponet'


const ComponentA = () => {

    const { x, print } = useMainContext()

    console.log("x===", x);

    return (
        <View>
            <Text>component A {x}</Text>
            <Button title='Click' onPress={() => { print }} />
            {/* <ComponentB /> */}
        </View>
    )
}

export default ComponentA