import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Animated} from 'react-native';
import {Image, Text, View} from '../../components/common';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
// import {WHITE, BLACK, PRIMARY_BUTTON} from '../../lib/colors';
// import Images from '../../lib/Images';
import {Dimensions} from 'react-native';
import TrackPlayer, {
  useProgress,
  usePlaybackState,
  Event,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {useFocusEffect} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
// import ImageButton from '../../components/common/ImageButton';
import Orientation from 'react-native-orientation-locker';
import {NativeModules} from 'react-native';
import {Platform} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {StatusBar} from 'react-native';
// import {SEMIBOLD} from '../../lib/FontFamily';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AudioFile = (props) => {
  const {position, duration} = useProgress();
  const [AudioState, setAudioState] = useState(true);
  const [landScape, setLandScape] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const playBackState = usePlaybackState();
  const [icon, setIcon] = useState();
  // let position = 0;
  // let duration = 0;
  let AudioData = props.route.params.item;
  console.log('AudioData', AudioData);

  useFocusEffect(
    useCallback(() => {
      console.log('OK-----');
      callEndFunction();
    }, [Math.round(position) == Math.round(duration)]),
  );
  console.log(
    'playBackState========>',
    Math.round(position),
    Math.round(duration),
    playBackState,
  );
  // This function is triggered when the user press on the fullscreen button or to come back from the fullscreen mode.
  // const onFullScreen = () => {
  //     if (!isFullScreen) {
  //         Orientation.lockToLandscape();
  //     } else {
  //         if (Platform.OS === 'ios') {
  //             Orientation.lockToPortrait();
  //         }
  //         Orientation.lockToPortrait();
  //     }
  //     setIsFullScreen(!isFullScreen);
  // };

  const callEndFunction = async () => {
    //    const  position1 = await TrackPlayer.getPosition();
    //     const duration = await TrackPlayer.getDuration();
    if (position >= duration) {
      console.log('song ended!!!');
      await TrackPlayer.destroy();
      start();
    }
  };

  const onPlayPause = () => {
    console.log('playBackState', playBackState);
    if (playBackState === 'playing' || playBackState === 3) {
      TrackPlayer.pause();
      setAudioState(false);
    }
    if (playBackState === 'paused' || playBackState === 2) {
      TrackPlayer.play();
      setAudioState(true);
    }
  };

  useEffect(() => {
    start();
    Orientation.addDeviceOrientationListener(handleOrientation);
    props.route.params.isLandScape == true
      ? setLandScape(true)
      : setLandScape(false);
    Icon1.getImageSource('stop-circle', 15, PRIMARY_BUTTON).then(setIcon);
    // checkFirstOrientation()
    // setLandScape(false)
    // handleOrientation2()
    return () => {
      console.log('return in useEffect');
      TrackPlayer.destroy();
      Orientation.removeDeviceOrientationListener(handleOrientation);
    };
  }, []);

  const checkFirstOrientation = () => {
    Orientation.getDeviceOrientation((orientation) => {
      console.log('orientation--->', orientation);
      if (
        !(
          orientation === 'PORTRAIT' ||
          orientation === 'PORTRAIT-UPSIDEDOWN' ||
          orientation === 'FACE-DOWN' ||
          orientation === 'FACE-UP'
        )
      ) {
        console.log('orientation--->', orientation);
        orientation == 'UNKNOWN' || orientation == ''
          ? null
          : setLandScape(true);
      }
    });
  };

  const handleOrientation = (orientation) => {
    console.log('auto--->', orientation);

    if (
      orientation === 'PORTRAIT' ||
      orientation == 'PORTRAIT-UPSIDEDOWN' ||
      orientation == 'FACE-DOWN' ||
      orientation == 'FACE-UP'
    ) {
      if (Platform.OS == 'ios') {
        NativeModules.ExpandLandscape.rotatePortrait(function (result) {
          Orientation.lockToPortrait();
          setLandScape(false);
        });
      } else {
        Orientation.getAutoRotateState((auto) => {
          console.log('autoinner--->', auto);
          if (auto) {
            setLandScape(false), Orientation.lockToPortrait();
          }
        });
      }
    } else {
      if (Platform.OS == 'ios') {
        NativeModules.ExpandLandscape.rotateLandScape(function (result) {
          Orientation.lockToLandscape();
          setLandScape(true);
        });
      } else {
        Orientation.getAutoRotateState((auto) => {
          console.log('autoelse/*  */--->', auto, orientation);
          if (auto) {
            setLandScape(true), Orientation.lockToLandscape();
          }
        });
      }
    }
  };

  const start = async () => {
    console.log('ok');
    await TrackPlayer.setupPlayer({});

    await TrackPlayer.add({
      url: AudioData.url, // Load media from the network
      title: AudioData.title,
      artist: 'TrueCircle',
      // artwork: Images.loginicon,
    });
    await TrackPlayer.play();

    // const position = await TrackPlayer.getPosition();
    // const duration = await TrackPlayer.getDuration();
    // if (position >= duration) {
    //     console.log("song ended!!!");
    // }
  };
  const handleChange = (val) => {
    TrackPlayer.seekTo(val);
  };
  const formatTime = (t) => {
    const digit = (n) => (n < 10 ? `0${n}` : `${n}`);
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t / 60) % 60));
    const hr = digit(Math.floor((t / 3600) % 60));
    return hr + ':' + min + ':' + sec;
  };

  const jumpForward = async () => {
    console.log('Jump forward');
    const offset = 5;
    try {
      const position = await TrackPlayer.getPosition();
      const duration = await TrackPlayer.getDuration();

      console.log({position, duration});

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

  const startshowTxet = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1000,
    }).start(() => dimiss());
  };
  const dimiss = () => {
    setProgress(new Animated.Value(0));
  };
  return (
    <View requiredSafeArea safeAreaColor={WHITE} style={styles.fullscreenVideo}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={WHITE}
      />
      <View style={[landScape ? styles.headerLandscape : styles.header]}>
        <ImageButton
          style={{tintColor: BLACK}}
          source={Images.backwht}
          touchableStyle={styles.touchacleButton}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text fontWeight={SEMIBOLD} style={styles.title}>
          {AudioData.title}
        </Text>
        <View style={{width: 40}} />
      </View>
      <View style={[landScape ? styles.mainViewLandScape : styles.mainView]}>
        {Platform.OS == 'ios' ? (
          playBackState != 'playing' && playBackState != 'paused' ? (
            <ActivityIndicator size={40} color={PRIMARY_BUTTON} />
          ) : playBackState == 'playing' ? (
            <LottieView
              style={styles.lottieStyle}
              autoPlay={true}
              loop={true}
              source={require('../../lib/wave-music-02.json')}
              onAnimationFinish={() => {
                startshowTxet();
              }}></LottieView>
          ) : (
            <Image
              resizeMode={'contain'}
              //style={{ height: screenHeight * 0.5, width: screenWidth * 0.6 }}
              source={Images.wave}
            />
          )
        ) : playBackState != 2 && playBackState != 3 ? (
          <ActivityIndicator size={40} color={PRIMARY_BUTTON} />
        ) : playBackState == 3 ? (
          <LottieView
            style={styles.lottieStyle}
            autoPlay={true}
            loop={true}
            source={require('../../lib/wave-music-02.json')}
            onAnimationFinish={() => {
              startshowTxet();
            }}></LottieView>
        ) : (
          <Image
            resizeMode={'contain'}
            //style={{ height: screenHeight * 0.5, width: screenWidth * 0.6 }}
            source={Images.wave}
          />
        )}
      </View>
      <View
        style={[landScape ? styles.sliderViewLandscape : styles.sliderView]}>
        <Slider
          style={[landScape ? styles.sliderLandscape : styles.slider]}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          minimumTrackTintColor={PRIMARY_BUTTON}
          maximumTrackTintColor={BLACK}
          onSlidingComplete={handleChange}
          thumbImage={icon}
        />
        <View style={styles.timeStyle}>
          <Text style={{fontSize: 12}}>{formatTime(position)}</Text>

          <Text style={{fontSize: 12}}>{formatTime(duration)}</Text>
        </View>
        <View style={styles.iconView}>
          <Icon1
            name="replay-5"
            color={BLACK}
            size={40}
            onPress={() => jumpBackward()}
          />
          {playBackState == 3 || playBackState == 'playing' ? (
            <Icon
              name="ios-pause"
              color={BLACK}
              size={40}
              onPress={() => onPlayPause()}
            />
          ) : (
            <Icon
              name="ios-play"
              color={BLACK}
              size={40}
              onPress={() => onPlayPause()}
            />
          )}
          <Icon1
            name="forward-5"
            color={BLACK}
            size={40}
            onPress={() => jumpForward()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vwMain: {
    flex: 1,
    backgroundColor: WHITE,
  },
  title: {
    //  backgroundColor: 'red',
    width: screenWidth * 0.6,
    textAlign: 'center',
    alignSelf: 'center',
  },
  mainView: {
    alignItems: 'center',
    height: screenHeight * 0.68,
    justifyContent: 'center',
    //backgroundColor : 'pink',
  },
  mainViewLandScape: {
    alignItems: 'center',
    //backgroundColor : 'pink',
    height: screenWidth * 0.5,
    justifyContent: 'center',
  },
  sliderView: {
    marginHorizontal: 10,
    height: screenHeight * 0.2,
    alignSelf: 'flex-end',
    //backgroundColor : 'red'
  },
  sliderViewLandscape: {
    marginHorizontal: 15,
    height: screenWidth * 0.28,
  },
  timeStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    marginTop: 10,
  },
  lottieStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  header: {
    height: screenHeight * 0.07,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerLandscape: {
    height: screenWidth * 0.15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  fullscreenVideo: {
    backgroundColor: WHITE,
    ...StyleSheet.absoluteFill,
    //a elevation: 1
  },
  slider: {
    width: screenWidth - 20,
    height: 20,
  },
  sliderLandscape: {
    width: screenHeight - 30,
    height: 20,
  },
  touchacleButton: {
    //backgroundColor : 'red',
    padding: 10,
  },
});

export default AudioFile;