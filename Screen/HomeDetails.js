import * as React from 'react';
// import AuthNavigator from './AuthNavigator/AuthNavigator';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    SectionList,
} from 'react-native';

const dataMenu = [
    {
        title: 'Food',
        data: ['Pizza', 'Burger', 'Samosa'],
    },
    {
        title: 'Languages',
        data: ['Hindi', 'English', 'Gujarati', 'Maithili'],
    },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Programing Languages',
        data: ['C++', 'C', 'Java', 'Python'],
    },
];

const renderItem = ({ item }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
        </View>
    )
}


const HomeDetails = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={dataMenu}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
});

export default HomeDetails;