import React from 'react';
import { View } from 'react-native';
import { List, Provider, Text } from 'react-native-paper';

const ListClone = () => {
    return (
        <Provider>

            {/* <List.Section title='Fruits'>
                <List.Accordion
                    title="Select Fruits">
                    <List.Item title="Apple" />
                    <List.Item title="Banana" />
                    <List.Item title="Lichi" />
                </List.Accordion>
            </List.Section>

            <List.Section title='Phones'>
                <List.Accordion
                    title="Select Phones">
                    <List.Item title="IPhone 13Pro Max" />
                    <List.Item title="IPhone 11" />
                </List.Accordion>
            </List.Section> */}

            <List.AccordionGroup>
                <List.Accordion title="Fruits" id="1">
                    <List.Item title='item-1' />
                    <List.Item title='item-2' />
                </List.Accordion>
                <List.Accordion title="Fun" id="2">
                    <List.Item title='item-1' />
                    <List.Item title='item-2' />
                </List.Accordion>
                <View>
                    <Text>
                        List.Accordion can be wrapped because implementation uses React.Context.
                    </Text>
                    <List.Accordion title="Accordion 3" id="3">
                        <List.Item title="Item 3" />
                        <List.Item title="Item 4" />
                        <List.Icon color={'red'} icon="folder" />
                        <List.Icon color={'red'} icon="equal" />
                        <List.Icon color={'blue'} icon="calendar" />
                    </List.Accordion>
                </View>
            </List.AccordionGroup>




        </Provider>
    )
}
export default ListClone;