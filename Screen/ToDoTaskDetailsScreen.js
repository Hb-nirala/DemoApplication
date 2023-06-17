import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const ToDoTaskDetailsScreen = (props) => {

    const [taskName, setTaskName] = useState('')
    const [taskDetails, setTaskDetails] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    let edit = props?.route?.params?.item != undefined ? props?.route?.params?.item : ''

    // console.log('edit', edit)

    //Why useEffect: for re-rendring data
    React.useEffect(() => {
        if (edit) {
            setTaskName(edit.name)
            setTaskDetails(edit.details)
            setTaskDescription(edit.description)
        }
    }, [])

    const submitTask = () => {
        let informationData = {
            name: taskName,
            details: taskDetails,
            description: taskDescription,
        }
        if (props?.route?.params?.item?.id) {
            informationData.id = props?.route?.params?.item.id
        } else {
            informationData.id = props.route.params.id
        }
        props.navigation.goBack()
        props.route.params.onPressData(informationData)//sending data to ToDoListScreen
    }

    const updateData = () => {
        var updateObje = {
            id: props?.route?.params?.item?.id,
            name: taskName,
            details: taskDetails,
            description: taskDescription
        }
        // console.log('update object id ===', props?.route?.params?.item.id)
        props.route.params.onUpdateData(updateObje)//sending updated data to ToDoListScreen
        props.navigation.goBack()
    }

    return (
        <View style={styles.viewTaskDetailsContainer}>
            <TextInput
                style={styles.textInputStyle}
                placeholder='Enter Task Name'
                numberOfLines={1}
                onChangeText={(taskName) => { setTaskName(taskName) }}
                value={taskName}
            />
            <TextInput
                style={styles.textInputStyle}
                placeholder='Task Details'
                multiline={true}
                onChangeText={(taskDetails) => { setTaskDetails(taskDetails) }}
                value={taskDetails}
            />
            <TextInput
                style={styles.textInputStyle}
                placeholder='Task Description'
                multiline={true}
                onChangeText={(taskDescription) => { setTaskDescription(taskDescription) }}
                value={taskDescription}
            />
            <TouchableOpacity
                onPress={() => { edit ? updateData() : submitTask() }}
                style={styles.touchableOpacityBtnStyle}>
                <Text style={styles.textSubmitStyle}>{edit ? 'Update' : 'Submit'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewTaskDetailsContainer: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: '#5e6672'
    },
    touchableOpacityBtnStyle: {
        alignSelf: 'center',
        alignItems: 'center',
        width: deviceWidth * 0.5,
        backgroundColor: '#feb342',
        marginTop: 30,
        borderRadius: 20,
    },
    textSubmitStyle: {
        color: 'black',
        fontSize: 20,
        padding: 10,
    },
    viewTextInputStyle: {
        alignSelf: 'center',
        backgroundColor: 'green',
        width: deviceWidth * 0.8,
    },
    textInputStyle: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white',
    }
});

export default ToDoTaskDetailsScreen;