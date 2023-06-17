import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider, Surface, Text, } from 'react-native-paper';

const SurfaceClone = () => {
    return (
        <Provider>
            <Surface style={styles.surface} elevation={5}
            >
                <Text>Surface</Text>
            </Surface>
        </Provider>
    )
}
const styles = StyleSheet.create({
    surface: {
        padding: 8,
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
export default SurfaceClone;