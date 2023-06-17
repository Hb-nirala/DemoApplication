import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import { Card, Text, List, IconButton, Button, Avatar, Divider } from 'react-native-paper';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const HistoryScreen = () => {
    return (
        <ScrollView>
            <Card>
                <View style={{ flexDirection: 'row', padding: 10, margin: 10, width: deviceWidth - 20, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: deviceWidth / 2.4 }}>
                        <Button style={{ borderColor: 'black', borderWidth: 2, }}>Month</Button>
                        <Button style={{ borderColor: 'black', borderWidth: 2 }}>Categories</Button>
                    </View>
                    <Button style={{ borderColor: 'black', borderWidth: 2 }}>Filters</Button>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image style={{ margin: 10 }}
                            source={{ uri: "https://png.pngtree.com/png-clipart/20190108/ourmid/pngtree-tree-green-plant-photography-png-png-image_305004.jpg" }} />
                        <View>
                            <Text>Paid to</Text>
                            <Text>Paid Subtitle</Text>
                        </View>
                    </View>
                    <View>
                        <Text>5000</Text>
                        <View>
                            <Avatar.Image
                                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg" }} />
                            <Text>Debited from</Text>
                        </View>
                    </View>
                </View>
                <Divider style={{ margin: 10 }}
                    width={deviceWidth - 20} />

            </Card>
        </ScrollView>
    )
}
export default HistoryScreen;