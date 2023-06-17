import React from 'react';
import { StyleSheet } from 'react-native';
import { AnimatedFAB, FAB, Provider, Portal } from 'react-native-paper';


const FABClone = () => {
    const [isExtended, setIsExtended] = React.useState(true);

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
        <Provider>

            {/* <FAB
            icon='plus'
            style={styles.fab}
            onPress={() => console.log('Pressed')}
        />
        <AnimatedFAB
            label={'New Message'}
            icon='plus'
            extended={isExtended}
            style={styles.fab}
            onPress={() => console.log('Pressed')}
            animateFrom={'right'}
            iconMode={'dynamic'}
            variant={'surface'}
        /> */}
            <Portal>
                <FAB.Group

                    open={open}
                    visible
                    icon={open ? 'calendar-today' : 'plus'}
                    actions={[
                        { icon: 'plus', onPress: () => console.log('Pressed add') },
                        {
                            icon: 'star',
                            label: 'Star',
                            onPress: () => console.log('Pressed star'),
                        },
                        {
                            icon: 'email',
                            label: 'Email',
                            onPress: () => console.log('Pressed email'),
                        },
                        {
                            icon: 'bell',
                            label: 'Remind',
                            onPress: () => console.log('Pressed notifications'),
                        },
                    ]}

                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }} />

            </Portal>

        </Provider>
    )
}
const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})
export default FABClone;