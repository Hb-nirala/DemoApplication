import React from 'react';
import { View } from 'react-native';
import { Provider, RadioButton, Text } from 'react-native-paper';

const RadioButtonClone = () => {
    const [value, setValue] = React.useState('first');
    return (
        <Provider>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                {/* <View>
                    <Text>First</Text>
                    <RadioButton value="first" />
                </View>
                <View>
                    <Text>Second</Text>
                    <RadioButton value="second" />
                </View> */}

                <RadioButton.Item label="First item" value="first" />
                <RadioButton.Item label="Second item" value="second" />
            </RadioButton.Group>
        </Provider>
    )
}
export default RadioButtonClone;