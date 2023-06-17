import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const VideoScreenClone = () => {
    return (
        <SafeAreaView style={VideoScreenStyle.viewContainerStyle}>
            <ScrollView pagingEnabled={true}>
                <Image
                    style={VideoScreenStyle.viewStyle}
                    resizeMode='cover'
                    source={{ uri: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
                <Image
                    style={VideoScreenStyle.viewStyle}
                    resizeMode='cover'
                    source={{ uri: 'https://cdn.pixabay.com/photo/2014/04/10/11/24/rose-320868__340.jpg' }}
                />

                <Image
                    style={VideoScreenStyle.viewStyle}
                    resizeMode='cover'
                    source={{ uri: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQEw4qv6FVQfjFe6SuYJRvk6A6jVRz2fMP-H6QQwvnCZkKKC3dWHRN7yUm_sgCI08fL5dhGrqPYHd17p9A' }}
                />
                <Image
                    style={VideoScreenStyle.viewStyle}
                    resizeMode='cover'
                    source={{ uri: 'https://i.pinimg.com/736x/02/b7/d3/02b7d33ea616c46706e84fdc51ca7743.jpg' }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
const VideoScreenStyle = StyleSheet.create({
    viewContainerStyle: {
        flex: 1,
        backgroundColor: 'green',
    },
    viewStyle: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: 'blue',
    },
})
export default VideoScreenClone;