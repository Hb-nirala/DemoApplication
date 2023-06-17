import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HorizontalScrollComponent = () => {

  //useState for ScrollView reference
  const scrollRef = useRef();

  //setRefresh ScrollView
  const [refreshing, setRefreshing] = React.useState(false)

  //create onRefresh function
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const [foodViewHeight, setFoodViewHeight] = useState('')
  const [bikeViewHeight, setBikeViewHeight] = useState('')
  const [clotheViewHeight, setClotheViewHeight] = useState('')
  const [vehiclesViewHeight, setVehiclesViewHeight] = useState('')
  return (
    <View style={styles.container}>
      <StatusBar
        StatusBarStyle={'light-content'}
        animated={true}
        backgroundColor={'red'} />

      <ScrollView ref={scrollRef}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

        {/**Food View  */}
        <View onLayout={(event) => { setFoodViewHeight(event.nativeEvent.layout.y) }}>
          <Text style={styles.textStyle}>Foods</Text>
          <ScrollView horizontal={true}
            pagingEnabled={true}>
            <View style={styles.viewImageStyle}>
              <Text style={styles.textStyle}>Burger</Text>
              <Image
                style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/800px-Hamburger_%28black_bg%29.jpg' }}></Image>
            </View>

            <View style={styles.viewImageStyle}>
              <Text style={styles.textStyle}>Pizza</Text>
              <Image
                style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/10/ad/fc/fc/fresh-toppings-and-hot.jpg' }}></Image>
            </View>

            <View style={styles.viewImageStyle}>
              <Text style={styles.textStyle}>Manchurian</Text>
              <Image
                style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: 'https://t4.ftcdn.net/jpg/03/24/56/73/360_F_324567329_VIPsg4s4kWkvqJviANcIgeYPG602kN56.jpg' }}></Image>
            </View>

          </ScrollView>
        </View>

        <View style={styles.viewTextStyle}>
          <Text>pizza, dish of Italian origin consisting of a flattened disk of
            bread dough topped with some combination of olive oil, oregano, tomato,
            olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually,
            in a commercial setting, using a wood-fired oven heated to a very high temperature—and
            served hot</Text>
        </View>

        {/**Bikes View */}
        <View onLayout={(event) => { setBikeViewHeight(event.nativeEvent.layout.y) }}>
          <Text style={styles.textStyle}>Bikes</Text>
          <ScrollView horizontal={true}
            pagingEnabled={true}>

            <View style={styles.viewImageStyle}>
              <Text style={styles.textStyle}>Ducati 1199</Text>
              <Image
                style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: 'https://images.hdqwalls.com/wallpapers/thumb/ducati-panigale-1199-4k-kq.jpg' }}>
              </Image>
            </View>

            <View style={styles.viewImageStyle}>
              <Text style={styles.textStyle}>Hunter 350</Text>
              <Image
                style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/124013/hunter-350-right-front-three-quarter.jpeg?isig=0&q=75' }}>
              </Image>
            </View>

            <View style={styles.viewImageStyle}>
              <Text style={styles.textStyle}>Pulsar NS125</Text>
              <Image
                style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20210420125938_Bajaj_Pulsar_NS125_1.jpg&w=700&q=90&c=1' }}>
              </Image>
            </View>

          </ScrollView>
        </View>

        {/**Clothes View */}
        <View onLayout={(event) => { setClotheViewHeight(event.nativeEvent.layout.y) }}>
          <Text style={styles.textStyle}>Clothes</Text>
          <ScrollView>
            <View style={styles.viewImageStyle}>
              <Text style={styles.textStyle}>Jeans-1</Text>
              <Image style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: 'https://media.gq.com/photos/570d11e8c28126b633eff4e4/16:9/w_2560%2Cc_limit/jean-jackets-gq-0516-04.jpg' }}>
              </Image>
            </View>

            <View style={styles.viewImageStyle}>
              <Text style={styles.textStyle}>Jeans-2</Text>
              <Image style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: 'https://i.pinimg.com/originals/43/d5/e9/43d5e9154382fd061cbf6e29781ed8cc.jpg' }}>
              </Image>
            </View>

            <View style={styles.viewImageStyle}>
              <Text style={styles.textStyle}>Jeans-3</Text>
              <Image style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8YxT21CMKq-bhyP6ec6mihnQN4z79hjDUIQ&usqp=CAU' }}>
              </Image>
            </View>
          </ScrollView>
        </View>

        {/**Vehicles View*/}
        <View onLayout={(event) => { setVehiclesViewHeight(event.nativeEvent.layout.y) }}>

          <Text style={styles.textStyle}>Vehicles</Text>

          <ScrollView horizontal={true}
            pagingEnabled={true}>

            <View style={styles.viewImageStyle}>
              <Text style={styles.textStyle}>Lamborghini</Text>
              <Image
                style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Lamborghini_Aventador_LP700-4_Orange.jpg' }}>
              </Image>
            </View>

            <View style={styles.viewImageStyle}>
              <Text style={styles.textStyle}>Lamborghini</Text>
              <Image
                style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsx_VoIi3JsikWf4rIij-6Sz6tDkxBdSQpw&usqp=CAU' }}>
              </Image>
            </View>

          </ScrollView>

        </View>

      </ScrollView>

      <View style={styles.viewFooterStyle}>
        <View>
          <TouchableOpacity onPress={() => { scrollRef.current?.scrollTo({ x: 0, y: foodViewHeight, animated: true }) }}>
            <Text style={styles.textStyleFooter}>Food</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => { scrollRef.current?.scrollTo({ x: 0, y: bikeViewHeight, animated: true }) }}>
            <Text style={styles.textStyleFooter}>Bikes</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => { scrollRef.current?.scrollTo({ x: 0, y: clotheViewHeight, animated: true }) }}>
            <Text style={styles.textStyleFooter}>Clothes</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => { scrollRef.current?.scrollToEnd({ x: 0, y: vehiclesViewHeight, animated: true }) }}>
            <Text style={styles.textStyleFooter}>Vehicles</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View >
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'silver',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 20,
    padding: 10,
  },
  viewFooterStyle: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textStyleFooter: {
    fontSize: 20,
    padding: 20,
    color: 'white',
  },
  imageStyle: {
    width: '100%',
    height: 300,
  },
  viewImageStyle: {
    margin: 5,
    backgroundColor: 'red',
    width: windowWidth - 10,

  },
  viewTextStyle: {
    margin: 5,
    backgroundColor: '#78cfba',
    padding: 10,
  },

});
export default HorizontalScrollComponent;
