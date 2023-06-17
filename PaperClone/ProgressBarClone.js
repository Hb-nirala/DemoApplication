import React from "react";
import { ProgressBar, Provider } from "react-native-paper";

const ProgressBarClone = () => {
    return (
        <Provider>
            <ProgressBar
                visible={true}
                indeterminate={false}
                animatedValue={0.25}
                style={{ alignItems: "center", marginTop: 30 }}
                progress={0.5} color={"red"} />
        </Provider>
    )
}
export default ProgressBarClone;