import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from 'react-native';
import MapView, { Callout, Marker, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { decode } from "@mapbox/polyline";

const Map = () => {

    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    const [pin, setPin] = useState({
        latitude: 0,
        longitude: 0
    })

    const [coords, setCoords] = useState([]);

    const getDirections = async (startLoc, destinationLoc) => {
        try {
            const KEY = "AIzaSyBVkJDc7qZ0BgHY_wcPUTTvKE1iOW_il5o"; //put your API key here.
            //otherwise, you'll have an 'unauthorized' error.
            let resp = await fetch(
                `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
            );
            let respJson = await resp.json();
            let points = decode(respJson.routes[0].overview_polyline.points);
            console.log(points);
            let coords = points.map((point, index) => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                };
            });
            return coords;
        } catch (error) {
            return error;
        }
    };

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


    useEffect(() => {
        //fetch the coordinates and then store its value into the coords Hook.
        getDirections("23.018261849822835,72.51711370423436", "25.51711370423436,75.51711370423436")
            .then(coords => console.log("coords", coords))
            .catch(err => console.log("Something went wrong"));
    }, []);


    //Searching function -----
    // const handleSearch = async () => {
    //     try {
    //         const response = await fetch(
    //             `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    //                 searchQuery
    //             )}&key=YOUR_API_KEY`
    //         );
    //         const data = await response.json();

    //         if (data.results && data.results.length > 0) {
    //             const { lat, lng } = data.results[0].geometry.location;
    //             setLocation({ latitude: lat, longitude: lng });
    //         }
    //     } catch (error) {
    //         console.error('Error searching location')
    //     }
    // }



    // Geolocation.getCurrentPosition((position) => {
    //     const currentLongitude = JSON.stringify(position.coords.longitude)
    //     // console.log("currentLongitude===", currentLongitude);
    //     setCurrentLongitude(currentLongitude)
    //     const currentLatitude = JSON.stringify(position.coords.latitude)
    //     // console.log("currentLatitude===", currentLatitude);
    //     setCurrentLatitude(currentLatitude)
    //     // const currentaccuracy = JSON.stringify(position.coords.accuracy)
    //     // console.log("currentaccuracy====", currentaccuracy);
    //     // const currentaltitude = JSON.stringify(position.coords.altitude)
    //     // console.log("currentaltitude====", currentaltitude);
    //     // const currentaltitudeAccuracy = JSON.stringify(position.coords.altitudeAccuracy)
    //     // console.log("currentaltitudeAccuracy=====", currentaltitudeAccuracy);
    //     // const currentheading = JSON.stringify(position.coords.heading)
    //     // console.log("currentheading====", currentheading);
    //     // const currentspeed = JSON.stringify(position.coords.speed)
    //     // console.log("currentspeed=====", currentspeed);

    // })


    return (
        <View style={styles.topMainContainer}>


            {/* <GooglePlacesAutocomplete
                placeholder="Search"
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                    rankby: "distance"
                }}
                onPress={(data, details) => {
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyBVkJDc7qZ0BgHY_wcPUTTvKE1iOW_il5o',
                    language: 'en',
                    components: "country:india",
                    type: "establishment",
                    radius: 30000
                }}
                styles={{
                    container: { flex: 0, position: 'absolute', width: '98%', zIndex: 1, alignSelf: 'center', marginTop: 10 },
                    listView: { backgroundColor: 'white' }
                }}
            /> */}

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

                    {coords.length > 0 && <Polyline coordinates={coords} />}
                    <Marker
                        coordinate={position}
                        title={"HB"}
                        description={"Hidden Brains"}
                    />
                    <Marker
                        coordinate={pin}
                        pinColor="black"
                        draggable={true}
                        onDragStart={(e) => {
                            console.log("Drag start", e)
                        }}
                        onDragEnd={(e) => {
                            setPin({
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude
                            })
                        }}
                    >
                        <Callout>
                            <Text>I'm here</Text>
                        </Callout>
                    </Marker>
                </MapView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
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
        // marginTop: 5,
    }
});
export default Map;