import React from 'react';
import { ScrollView } from 'react-native';
import { Provider } from 'react-native-paper';
import CardComponent from './CardComponent';

const Home = () => {
    return (
        <Provider>
            <ScrollView>
                <CardComponent
                    cardTitle={"Hello"}
                    cardSubTitle={"Hello Nirala How are you ?"}
                    cardDescription={"Always believe something wonderful is about to happen"}
                    cardImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeAsR3MCZO5QR3lNoMfgmv1dF1RlXto2Z7YyfX3OVXxwa3kId05UMJn6s4_7agixbAq8&usqp=CAU'}
                />
                <CardComponent
                    cardTitle={"Good Morning"}
                    cardSubTitle={"Good Morning! Nirala How are you ?"}
                    cardDescription={"Our greatest glory is not in never falling, but in rising every time we fall."}
                    cardImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGOHkMExttDOcfZ1kjjEysgEuYB74CpMTyw&usqp=CAU'}
                />
            </ScrollView>
        </Provider>
    )
}
export default Home;