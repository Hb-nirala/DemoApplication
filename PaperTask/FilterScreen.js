import React, { useCallback, useState } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, FlatList } from 'react-native';
import { Appbar, Avatar, Chip, Divider, IconButton, List, Provider, Text, ToggleButton, Button, RadioButton } from 'react-native-paper';
import ChipComponent from './ChipComponent';
import ChipStarComponent from './ChipStarComponent';
import SliderComponent from '../SliderComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Rating } from 'react-native-ratings';

const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const Data = [
  {
    name: 'Black',
    color: 'black',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg' }
  },
  {
    name: 'Red',
    color: 'red',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Red_Color.jpg/1200px-Red_Color.jpg' }
  },
  {
    name: 'green',
    color: 'green',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO44csOMczZ9-LOFV8it4DC-y0sQTJbcRX1T0dctYzniiPh_TnmLIfSV7Fs9CI1xQZzA&usqp=CAU' }
  },
  {
    name: 'yellow',
    color: 'yellow',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTbDQks5tWSfxoB1VhBk4ytLut5zO7oYuxM1XSdmsswfcyA5nzdMUQ2noi7jLD-o7sQs&usqp=CAU' }
  }
]

// const DataList = [
//   {
//     name: 'Ardell',
//   },
//   {
//     name: 'bareMinerals',
//   },
//   {
//     name: 'Ciate',
//   },
//   {
//     name: 'Rock',
//   }
// ]

// const Item2 = ( {item1} ) = (
//  <View>
//   <Text>{item1.name}</Text>
//  </View>
// )

const Item = ({ item }) => (
  <View>
    {/* <Text style={{ margin: 10 }}>{item.name}</Text> */}
    <ChipComponent
      colorImage={item.image}
      colorName={item.name}
      badgeColorStyle={item.color} />
  </View>
);

const FilterScreen = () => {

  const [checked, setChecked] = useState(false)
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)

  // const [sliderValue, setSliderValue] = useState(15);
  // const [value, setValue] = React.useState('left');

  const [state1, setState1] = React.useState(false)
  const [state2, setState2] = React.useState(false)
  const [state3, setState3] = React.useState(false)

  return (
    <ScrollView>

      <Appbar.Header>
        <View style={{ width: screenWidth, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Appbar.Action
            icon="chevron-left"
            onPress={() => { console.log("Appbar.Action") }} />
          <View style={{ width: screenWidth * 0.6, flexDirection: 'row' }}>
            <Appbar.Content
              title={"Filter"}
            />
            <Appbar.Content
              titleStyle={styles.AppbarTitleStyle}
              title={"Reset"}
            // onPress={() => { console.log("Hello") }}
            />
          </View>
        </View>
      </Appbar.Header>




      <View style={{ width: screenWidth - 20, margin: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text variant='headlineSmall' >Category</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text variant='headlineSmall' >View all</Text>
          <Icon name="chevron-right" size={30} />
        </View>
      </View>

      <Divider />

      <View style={{ width: screenWidth - 20, margin: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text variant='headlineSmall' >Brand</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text variant='headlineSmall' >View all</Text>
          <Icon name="chevron-right" size={30} />
        </View>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ width: screenWidth - 20, margin: 10 }}>

        {state1 ?
          <Chip
            style={{ backgroundColor: 'black', margin: 5 }}
            icon="check"
            onPress={() => { setState1(false) }}>
            <Text style={{ color: 'white' }}>Example Chip</Text></Chip> :
          <Chip
            style={{ backgroundColor: 'white', margin: 5 }}
            onPress={() => { setState1(true) }}>Example Chip</Chip>}


        {state2 ?
          <Chip
            style={{ backgroundColor: 'black', margin: 5 }}
            icon="check"
            onPress={() => { setState2(false) }}>
            <Text style={{ color: 'white' }}>Example Chip</Text></Chip> :
          <Chip
            style={{ backgroundColor: 'white', margin: 5 }}
            onPress={() => { setState2(true) }}>Example Chip</Chip>}



        {state3 ?
          <Chip
            style={{ backgroundColor: 'black', margin: 5 }}
            icon="check"
            onPress={() => { setState3(false) }}>
            <Text style={{ color: 'white' }}>Example Chip</Text></Chip> :
          <Chip
            style={{ backgroundColor: 'white', margin: 5 }}
            onPress={() => { setState3(true) }}>Example Chip</Chip>}

      </ScrollView>

      <List.Accordion title="Color">
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={({ item }) => <Item item={item} />}
        />
      </List.Accordion>

      <List.Accordion title="Price Range">
        <SliderComponent />
      </List.Accordion>

      <List.Accordion title='Customer Review'>

        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

          <View>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='black'
            />
          </View>

          <View>
            <RadioButton.Group>
              <RadioButton
                // value="first"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => { setChecked(!checked); setChecked1(checked1); setChecked2(checked2) }}
              />
            </RadioButton.Group>
          </View>

        </View>

        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

          <View>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='black'
            />
          </View>

          <View>
            <RadioButton.Group>
              <RadioButton
                // value="first"
                status={checked1 ? 'checked' : 'unchecked'}
                onPress={() => { setChecked1(!checked1); setChecked(checked); setChecked2(checked2) }}
              />
            </RadioButton.Group>
          </View>

        </View>

        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

          <View>
            <Rating
              type='custom'
              imageSize={30}
              ratingColor='black'
            />
          </View>

          <View>
            <RadioButton.Group>
              <RadioButton
                // value="first"
                status={checked2 ? 'checked' : 'unchecked'}
                onPress={() => { setChecked2(!checked2); setChecked(checked); setChecked1(checked1) }}
              />
            </RadioButton.Group>
          </View>

        </View>

      </List.Accordion>

      <Button
        style={{ margin: 10 }}
        buttonColor='black'
        labelStyle={{ color: "white", fontSize: 20 }}
      >Show 345 results</Button>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  AppbarTitleStyle: {
    alignSelf: 'center',
  },
})
export default FilterScreen;