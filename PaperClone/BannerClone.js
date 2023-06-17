import React, { useState } from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

const BannerClone = () => {
    const [visible, setVisible] = useState(true)

    return (
        <Banner
            visible={visible}
            actions={[
                {
                    label: 'hello',
                    onPress: () => { setVisible(false) }
                },
                {
                    label: 'hii',
                    onPress: () => { setVisible(false); console.log('Click Hii') }
                }
            ]}
            icon={({ size }) => (<Image source={{ uri: 'https://www.freakingtech.com/wp-content/uploads/2020/07/cat.jpg', }}
                style={{
                    width: 60,
                    height: 60,
                }} />)
            }>
            Hii, I am Cat From another Gola

        </Banner>
    )
}
export default BannerClone;