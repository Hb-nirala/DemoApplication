import React, { useState } from 'react';
import { View } from 'react-native';
import { Chip, RadioButton, Text } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';

const ChipStarComponent = () => {
    const [checked, setChecked] = useState(false)
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)

    return (
        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <View>
                <Rating
                    type='custom'
                    imageSize={30}
                    ratingColor='black'
                />
            </View>

            <View>
                <RadioButton.Group>
                    <RadioButton
                        // value="first"
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => { setChecked(!checked); setChecked1(checked); setChecked2(checked) }}

                    />
                </RadioButton.Group>
            </View>
        </View>

    )
}
export default ChipStarComponent;





