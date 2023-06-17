import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Provider, Text } from 'react-native-paper';

const CardComponent = ({ cardTitle, cardSubTitle, cardDescription, cardImage }) => {
    return (
        <Provider>
            <Card style={Styles.cardStyle}>
                <Card.Title title={cardTitle} subtitle={cardSubTitle} />
                <Card.Cover source={{ uri: cardImage }} />
                <Card.Content>
                    <Text>{cardDescription}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button>OK</Button>
                    <Button>CANCEL</Button>
                    <Button>Submit</Button>
                </Card.Actions>
            </Card>
        </Provider>
    )
}
const Styles = StyleSheet.create({
    cardStyle: {
        margin: 10,
        padding: 10,
    }
})
export default CardComponent;