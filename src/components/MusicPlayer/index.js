import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    ActivityIndicator,
    Image,
    Text,
} from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import TrackPlayer, { usePlaybackState, useProgress } from 'react-native-track-player';
import styles from './styles';
import PlayerSlider from './PlayerSlider';
import { addTracks, setupPlayer } from './trackPlayerServices';
import { tracks } from './trackList';

const MusicPlayer = (props) => {
    const playBackState = usePlaybackState()
    const [isPlayerReady, setIsPlayerReady] = useState(true);
    const { position, duration } = useProgress();
    const [audioState, setAudioState] = useState()
    const [songData, setSongData] = useState(props.route.params.item)
    const [isPlay, setIsPlay] = useState(true)

    console.log(props.route.params.item);
    // var audioFile = require(props.route.params.item.uri);
    // console.log('audioFile===', require('../MusicPlayer/songs/sample-3.mp3'));

    // const addTracks = async () => {
    //     for (const track of tracks) {
    //         await TrackPlayer.add(track);
    //     }
    // };

    // console.log('props.route.params.item',props.route.params.item);
    // console.log('songData===',songData.uri);
    // let audioData=

    const start = async () => {
        console.log('ok');
        await TrackPlayer.setupPlayer({});
        await TrackPlayer.add({
            // ../MusicPlayer/songs/songs_2.mp3
            url: songData.uri, // Load media from the network
            title: 'Songs',
            artist: 'Demo',
        });
        await TrackPlayer.play();
    };

    const jumpForward = async () => {
        console.log('Jump forward');
        const offset = 5;
        try {
            const position = await TrackPlayer.getPosition();
            const duration = await TrackPlayer.getDuration();

            console.log({ position, duration });

            if (duration - position > offset) {
                console.log('jumping in fact');
                await TrackPlayer.seekTo(position + offset);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const jumpBackward = async () => {
        const offset = 5;
        console.log('Jump backward');
        try {
            const position = await TrackPlayer.getPosition();
            if (position - offset > 0) {
                await TrackPlayer.seekTo(position - offset);
            } else {
                await TrackPlayer.seekTo(0);
            }
        } catch (err) {
            console.log(err);
        }
    };


    //This function is use to load songs 
    // useEffect(() => {
    //     async function setup() {
    //         let isSetup = await setupPlayer();
    //         const queue = await TrackPlayer.getQueue();
    //         if (isSetup && queue.length <= 0) {
    //             // await addTracks();
    //         }
    //         setIsPlayerReady(isSetup);
    //     }
    //     setup();
    // }, []);


    useEffect(() => {
       
    }, [start()])

    // const start = async () => {
    //     console.log('ok');
    //     await TrackPlayer.setupPlayer();

    //     await TrackPlayer.add({
    //         url: require('../../../assets/songs/songs_1.mp3'), // Load media from the network
    //         title: tracks.title,
    //         artist: 'TrueCircle',
    //         // artwork: Images.loginicon,
    //     });
    //     await TrackPlayer.play();
    //     // const position = await TrackPlayer.getPosition();
    //     // const duration = await TrackPlayer.getDuration();
    //     // if (position >= duration) {
    //     //     console.log("song ended!!!");
    //     // }
    // };





    //Time formate function 
    const formatTime = (t) => {
        const digit = (n) => (n < 10 ? `0${n}` : `${n}`);
        const sec = digit(Math.floor(t % 60));
        const min = digit(Math.floor((t / 60) % 60));
        const hr = digit(Math.floor((t / 3600) % 60));
        return hr + ':' + min + ':' + sec;
    };

    if (!isPlayerReady) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color="#bbb" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={{ uri: songData.image }} />

            <Text style={styles.textStyle}>{songData.name}</Text>
            <PlayerSlider
                minimumValue={0}
                maximumValue={duration}
                value={position}
                onValueChange={(value) => console.log(value)}
            />
            <View style={styles.timeStyle}>
                <Text style={styles.timeTextStyle}>{formatTime(position)}</Text>
                <Text style={styles.timeTextStyle}>{formatTime(duration)}</Text>
            </View>

            <View>
                <PaperButton
                    style={styles.paperButtonStyle}
                    mode="contained"
                    onPress={() => { isPlay ? (TrackPlayer.pause(), setIsPlay(!isPlay)) : (TrackPlayer.play(), setIsPlay(!isPlay)) }}>{isPlay ? 'Pause' : 'Play'}</PaperButton>
                <PaperButton
                    style={styles.paperButtonStyle}
                    mode="contained"
                    onPress={() => jumpForward()}>Next</PaperButton>
                <PaperButton
                    style={styles.paperButtonStyle}
                    mode="contained"
                    onPress={() => jumpBackward()}>Previous</PaperButton>
            </View>
        </SafeAreaView>
    );
}
export default MusicPlayer;