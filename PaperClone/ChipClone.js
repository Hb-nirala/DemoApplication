import React from 'react';
import { Chip, Provider, Text } from 'react-native-paper';

const ChipClone = () => {
    return (
        <Provider>
            <Chip
                icon="information" onPress={() => console.log('hello I am chip')}>Hello Chip</Chip>
            <Chip
                mode='outlined'
                icon="right"
                onPress={() => console.log('hello I am chip')}>Hello Chip</Chip>
        </Provider>
    )
}
export default ChipClone;