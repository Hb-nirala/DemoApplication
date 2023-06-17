import React from 'react';
import { StyleSheet, View, Text, Dimensions, Modal } from 'react-native';
import RangeSlider from 'rn-range-slider';
const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const SliderComponent = (min, max) => {
    return (
        <View style={styles.root}>

            <RangeSlider
                min={min}
                max={max}
                // low={1}
                // high={250}
                step={1}
                floatingLabel
                renderThumb={() => {
                    return <View style={[styles.rootLow]} />
                }}
                renderRail={() => {
                    return <View style={styles.rootRail} />
                }}
                renderRailSelected={() => {
                    return <View style={styles.rootR} />
                }}

                onValueChanged={React.useCallback((low, high, fromUser) => {
                    console.log('low', low)
                    console.log('high', high)
                    console.log('fromUser', fromUser)
                }, [])
                }
            />
           

        </View>
    )
}
const styles = StyleSheet.create({
    rootRail: {
        flex: 1,
        height: 9,
        backgroundColor: 'blue',
        borderRadius: 2,
    },
    rootLow: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#7f7f7f',
        backgroundColor: 'red',

    },
    rootR: {
        flex: 1,
        height: 9,
        borderRadius: 5,
        backgroundColor: 'green',
    },
})
export default SliderComponent;