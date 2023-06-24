import { View, Text } from 'react-native'
import React, { createContext, useContext, useMemo } from 'react'

export const MyContext = createContext({})

export const MainContext = ({ children }) => {

    let x = "Hii Bro"
    const print = () => {
        console.log("print====");
    }

    const contextData = useMemo(
        () => ({
            print,
            x
        }),
        [
            print,
            x
        ]
    )
    
    return (
        <MyContext.Provider value={contextData}>
            {children}
        </MyContext.Provider>
    )
}

// const MainComponet = () => {
//     return (
//         <MyContext.Provider value={contextData}>
//             <View>
//                 <Text>
//                     Hello i am main Component
//                 </Text>
//                 <ComponentA />
//             </View>
//         </MyContext.Provider>

//     )
// }
export const useMainContext = () => useContext(MyContext)

export default MyContext