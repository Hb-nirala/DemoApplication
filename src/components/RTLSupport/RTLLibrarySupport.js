import { View, Text, StyleSheet, Button, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react';
import localization from '.';

const RTLLibrarySupport = () => {

    const [language, setLanguage] = useState('')

    var Arabicgreeting = localization?._props?.ar
    var Englishgreeting = localization?._props?.en
    var Frenchgreeting = localization?._props?.fr
    // console.log("Arabicgreeting======", Arabicgreeting);
    // console.log("Englishgreeting======", Englishgreeting);
    // console.log("Frenchgreeting======", Frenchgreeting);
    // console.log("greeting======",greeting);
    // console.log("localization?._props===", localization?._props);
    // console.log("localization===",ln[0]);
    // console.log("localization", localization);
    // console.log("language====",language);

    const switchLanguage = (languageCode) => {
        setLanguage(languageCode);
        // console.log("languageCode",languageCode);
    };

    return (
        <>
            <Text>{Arabicgreeting.greeting === '' ? "" : Arabicgreeting.greeting}</Text>
            <TouchableOpacity style={styles.ButtonStyle}
                onPress={() => { switchLanguage() }}>
                <Text>Englishgreeting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonStyle}
                onPress={() => { switchLanguage() }}>
                <Text>Frenchgreeting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonStyle}
                onPress={() => { switchLanguage() }}>
                <Text>Arabicgreeting</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    ButtonStyle: {
        backgroundColor: 'green',
        width: 200,
        height: 50,
        marginVertical: 50,
        borderRadius: 10,
        alignItems: 'center',
        padding: 15
    }
})
export default RTLLibrarySupport




