import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from 'react-native'
import { Circle, Svg, SvgUri, SvgWithCss, SvgWithCssUri, SvgXml } from "react-native-svg";
import EDEKAsmart_logo_neg from '../../../assets/svg/EDEKAsmart_logo_neg.svg';

const SVG = () => {

    // var value = EDEKAsmart_logo_neg.toString()
    // console.log(typeof (value));
    // console.log(EDEKAsmart_logo_neg.toString());

    return (
        <>
            <View style={styles.container}>
                <Text>Hii</Text>
                <SvgUri
                    height={100} width={100}
                    uri='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/1x1/ad.svg'
                />

                {/* <SvgUri
                    height={100} width={100}
                    // xml={EDEKAsmart_logo_neg} 
                    uri='EDEKAsmart_logo_neg'
                /> */}

                <Svg
                    height={100} width={100}
                    xml={EDEKAsmart_logo_neg}
                />

                <SvgXml
                    height={100} width={100}
                    xml={EDEKAsmart_logo_neg}
                />

                <View style={{ alignSelf: 'center', backgroundColor: 'red' }}>
                    <SvgWithCss
                        height={100}
                        xml={EDEKAsmart_logo_neg}
                    />
                </View>

                <SvgWithCss
                    height={100} width={100}
                    xml={EDEKAsmart_logo_neg}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
export default SVG;