import React from 'react';
import { View } from 'react-native';
import { Searchbar, Card, Text, Button, IconButton } from 'react-native-paper';

const WealthScreen = () => {
    return (
        <View>
            <Searchbar
                style={{ margin: 10 }}
            />
            <Card style={{ margin: 10, padding: 15 }}>
                <Text>My Portfolio</Text>
                <Text>100.00</Text>
                <Text>View SIPs, orders & account</Text>
            </Card>

            <Card style={{ margin: 10, padding: 15 }}>
                <Text>Create wealth with SIP</Text>
                <Text>4.5cr+ SIP investments every month.</Text>
                <Text>Grow your money with SIP now.</Text>
                <Button>START A SIP</Button>
            </Card>

            <Card style={{ margin: 10, padding: 15 }}>
                <Text>Investment Ideas</Text>

                <View style={{ flexDirection: 'row',justifyContent:'space-between',flexWrap:'wrap' }}>

                    <View style={{ alignItems: 'center' }}>
                        <IconButton icon='gold' size={40} iconColor='blue' />
                        <Text>Gold</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <IconButton icon='office-building-outline' size={40} iconColor='blue' />
                        <Text style={{textAlign:'center'}}>Top Companies</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <IconButton icon='gold' size={40} iconColor='blue' />
                        <Text>Gold</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <IconButton icon='gold' size={40} iconColor='blue' />
                        <Text>Gold</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <IconButton icon='gold' size={40} iconColor='blue' />
                        <Text>Gold</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <IconButton icon='gold' size={40} iconColor='blue' />
                        <Text>Gold</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <IconButton icon='gold' size={40} iconColor='blue' />
                        <Text>Gold</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <IconButton icon='gold' size={40} iconColor='blue' />
                        <Text>Gold</Text>
                    </View>

                </View>

            </Card>

        </View>
    )
}
export default WealthScreen;