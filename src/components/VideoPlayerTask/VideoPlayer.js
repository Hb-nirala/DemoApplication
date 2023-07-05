import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable, Image, ImageBackground } from "react-native";
import Orientation from 'react-native-orientation-locker';
import { Button } from "react-native-paper";
import VideoPlayer from 'react-native-video-controls';

const VideoPlayer1 = () => {
    const [fullScreen, setFullScreen] = useState(false);
    const [start, setStart] = useState(false)

    const FullScreen = () => {
        if (fullScreen) {
            Orientation.lockToPortrait();
        } else {
            Orientation.lockToLandscape();
        }
        setFullScreen(!fullScreen)
    }
    return (
        <View style={styles.container}>
            <Button onPress={() => { FullScreen() }}>FullScreen</Button>
            {start ?
                <View style={fullScreen ? styles.fullscreenVideo : styles.videoViewStyle}>
                    <VideoPlayer
                        fullscreen={fullScreen}
                        
                        style={styles.backgroundVideo}
                        seekColor={'red'}
                        // isFullScreen={true}
                        // videoWidth={1600}
                        // videoHeight={900}
                        resizeMode='contain'

                        // tapAnywhereToPause={false}
                        thumbnail={{ uri: 'https://www.howtogeek.com/wp-content/uploads/2021/08/YouTube-logo-hero-1.png?height=200p&trim=2,2,2,2&crop=16:9' }}
                        // disableFullscreen={false}
                        source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }}
                    />
                </View> :
                // <View style={styles.thumbnailView}>
                <View style={{}}>
                    <ImageBackground
                        style={styles.thumbnailView}
                        resizeMode='center'
                        source={{ uri: 'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc' }} >
                        <Button onPress={() => { setStart(!start) }}>Start</Button>
                    </ImageBackground>
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, },
    backgroundVideo: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        // margin: 5,
    },
    videoViewStyle: {
        justifyContent: 'center',
        margin: 2,
        width: '99%',
        height: '30%',
        backgroundColor: 'green'
    },
    fullscreenVideo: {
        backgroundColor: 'red',
        justifyContent: 'center',
        width: '99.5%',
        height: '90%',
        margin: 2,
    },
    thumbnailView: {
        margin:5,
        width: '98%',
        height: 200,
        // alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'black'
    }
})
export default VideoPlayer1; 