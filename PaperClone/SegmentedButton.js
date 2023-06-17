import React from 'react';
import { Provider, SegmentedButtons } from 'react-native-paper';

const SegmentedButton = () => {
    return (
        <Provider>
            <SegmentedButtons


                buttons={[
                    {
                        // value:'Room',
                        label: 'RoomRent',




                    },
                    {
                        // value:'Food',
                        label: 'Cook'
                    }
                ]} />


        </Provider>
    )
}
export default SegmentedButton;