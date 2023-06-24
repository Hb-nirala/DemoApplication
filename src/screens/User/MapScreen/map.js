import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet } from "react-native";
import MapView, { Callout, Marker, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapScreen = () => {
    const searchRef = useRef();

    useEffect(() => {
        Geolocation.getCurrentPosition((position) => {
            let lat = parseFloat(position.coords.latitude)
            let long = parseFloat(position.coords.longitude)
            console.log("lat===", lat, "long====", long);
            var currentPosition = {
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            }
            setPosition(currentPosition)
        })
    }, [])

    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    return (
        <View style={styles.topMainContainer}>
            <View style={styles.MainContainer}>
                <MapView
                    style={styles.mapStyle}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    followsUserLocation={true}
                    showsCompass={true}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    initialRegion={position}
                    pitchEnabled={true}
                    rotateEnabled={true}
                    onRegionChange={(current) => { console.log("current==", current) }}
                    provider="google"
                >
                    <Marker
                        coordinate={position}
                        title={"HB"}
                        description={"Hidden Brains"}
                    />
                </MapView>
            </View>
            <GooglePlacesAutocomplete
                placeholder='Search..'
                minLength={2}
                autoFocus={true}
                currentLocation={true}
                currentLocationLabel='Current location'
                returnKeyType={'search'}
                listViewDisplayed='auto'    // true/false/undefined
                fetchDetails={true}
                ref={searchRef}
                debounce={200}
                listUnderlayColor={"green"}
                autoFillOnNotFound={true}
                onFail={(text) => { console.log('No  found=====><><', text); }}
                onNotFound={(text) => { console.log('No data found=======$$$$', text); }}
                enablePoweredByContainer={false}
                numberOfLines={3}
                isRowScrollable={true}
                renderDescription={row => row.description || row.formatted_address || row.name}
                onPress={(data, details = null) => {
                    console.log("details====>",details.geometry);
                    onPressLocation({
                        latitude: parseFloat(details.geometry.location.lat),
                        longitude: parseFloat(details.geometry.location.lng),
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    },
                        details.formatted_address
                    )
                }}
                getDefaultValue={() => ''}
                query={{
                    key: 'AIzaSyBVkJDc7qZ0BgHY_wcPUTTvKE1iOW_il5o',
                    language: 'en',
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                GooglePlacesSearchQuery={{
                    rankby: 'distance',
                }}
                GooglePlacesDetailsQuery={{
                    fields: ''
                }}
                styles={{
                    textInputContainer: {
                        marginTop: 20,
                        width: '80%',
                        borderBottomWidth: 4,
                        borderBottomColor: 'rgba(199,205,213, 0.3)',
                        borderRadius: 8
                    },
                    description: {
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'red',
                        paddingVertical: 3
                       
                    },
                    // predefinedPlacesDescription: {
                    //     color: '#1faadb'
                    // },
                    container: {
                        zIndex: 2,
                        alignItems: 'center'
                    },
                    row: {
                        numberOfLines: 3,
                        width: '85%',
                        flexDirection: 'column',

                    },
                    separator: {
                        width: '80%',
                        alignSelf: 'center'
                    },
                    listView: {
                    }
                }}


            />
        </View>
    )
}
const styles = StyleSheet.create({
    MainContainer: {
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        bottom: 0,
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    topMainContainer: {
        flex: 1,
        height: '100%'
    }
})
export default MapScreen