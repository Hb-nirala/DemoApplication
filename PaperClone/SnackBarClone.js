import React from 'react';
import { Button, Provider, Snackbar } from 'react-native-paper';

const SnackBarClone = () => {

    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);
    return (
        <Provider>
            <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>

            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Undo',
                    onPress: () => {
                        // Do something
                    },
                }}>
                Hey there! I'm a Snackbar.
            </Snackbar>
        </Provider>
    )
}
export default SnackBarClone;