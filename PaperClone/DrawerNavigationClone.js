import React from 'react';
import { Drawer } from 'react-native-paper';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './LoginClone';

const drawer = createDrawerNavigator()

const DrawerNavigationClone = () => {
    const [active, setActive] = React.useState('');
    return (
        // <Drawer.CollapsedItem
        //     focusedIcon="inbox"
        //     unfocusedIcon="inbox-outline"
        //     label="Inbox"
        // />
        // <Drawer.Item
        //     style={{ backgroundColor: '#64ffda' }}
        //     icon="star"
        //     label="First Item"
        // />
     

            {/* <Drawer.Section title="Some title">
                <Drawer.Item
                    label="First Item"
                    active={active === 'first'}
                    onPress={() => setActive('first')}
                />
                <Drawer.Item
                    label="Second Item"
                    active={active === 'second'}
                    onPress={() => setActive('second')}
                />
            </Drawer.Section> */}
    )
}
export default DrawerNavigationClone;