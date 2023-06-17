import React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const MenuClone = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    return (
        <Provider>
            {/* <View
                style={{
                    paddingTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>Show menu</Button>}>
                    <Menu.Item onPress={() => { }} title="Item 1" />
                    <Menu.Item onPress={() => { }} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => { }} title="Item 3" />
                </Menu>
            </View> */}

            <View style={{ flex: 1 }}>
                <Menu.Item leadingIcon="redo" onPress={() => { }} title="Redo" />
                <Menu.Item leadingIcon="undo" onPress={() => { }} title="Undo" />
                <Menu.Item leadingIcon="content-cut" onPress={() => { }} title="Cut" disabled />
                <Menu.Item leadingIcon="content-copy" onPress={() => { }} title="Copy" disabled />
                <Menu.Item leadingIcon="content-paste" onPress={() => { }} title="Paste" />
            </View>
        </Provider>

    )
}
export default MenuClone;