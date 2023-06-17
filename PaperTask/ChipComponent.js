import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, Chip, Avatar, Text, Badge } from 'react-native-paper';


const ChipComponent = ({ colorName, colorImage, badgeColorStyle }) => {
    const [state, setState] = React.useState(false)

    return (
        <View>

            {state ?
                <Chip
                    style={[styles.chipStyle, { backgroundColor: 'black' }]}
                    onPress={() => setState(false)}
                >
                    <View style={styles.viewStyle}>
                        <View style={[{ width: 30, height: 30, backgroundColor: badgeColorStyle, borderRadius: 15, padding: 10 }]}>
                        </View>
                        <View>
                            <Text style={[styles.textStyle, { color: 'white' }]}>{colorName}</Text>
                        </View>
                    </View>
                </Chip > :
                <Chip
                    style={styles.chipStyle}
                    onPress={() => setState(true)}
                >
                    <View style={styles.viewStyle}>
                        <View style={[{ width: 30, height: 30, backgroundColor: badgeColorStyle, borderRadius: 15, padding: 10 }]}>
                        </View>
                        <View>
                            <Text style={styles.textStyle}>{colorName}</Text>
                        </View>
                    </View>
                </Chip >
            }
        </View>

    )
}
const styles = StyleSheet.create({
    chipStyle: {
        width: 150,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 30,
        alignItems:'center',
        marginLeft: 5,
    },
    viewStyle: {
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 20,
        marginLeft: 10,
    }
})
export default ChipComponent;

