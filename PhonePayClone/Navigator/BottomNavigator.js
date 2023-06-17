import React from 'react';
import { BottomNavigation, Provider, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>;

const StoresRoute = () => <Text>Stores</Text>;

const InsuranceRoute = () => <Text>Insurance</Text>;

const WealthRoute = () => <Text>Wealth</Text>;

const HistoryRoute = () => <Text>History</Text>;

const BottomNavigationClone = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'stores', title: 'Stores', focusedIcon: 'album' },
        { key: 'insurance', title: 'Insurance', focusedIcon: 'history' },
        { key: 'wealth', title: 'Wealth', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
        { key: 'history', title: 'History', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        stores: StoresRoute,
        insurance: InsuranceRoute,
        wealth: WealthRoute,
        history: HistoryRoute
    });

    return (
        <Provider>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene} />
        </Provider>
    )
}
export default BottomNavigationClone;
