import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal,Image } from 'react-native'

export default function GoalInput({ showModal,onGoalAdd,onModalClose }) {
    const [goalInput, setGoalInput] = useState();
    const handleGoalInputChange = (text) => {
        setGoalInput(text);
    }

    return (
        <Modal visible={showModal} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput style={styles.textInput} placeholder='Your course Goal' onChangeText={handleGoalInputChange}></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='Add Goal' onPress={() => {onGoalAdd(goalInput);onModalClose(false)}} color="#5e0acc"/></View>
                    <View style={styles.button}><Button title='Cancel' onPress={()=>onModalClose(false)} color="#f31282"/></View>
                </View>
                
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding:16,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#311b6b'
    },
    image:{
        width:100,
        height:100,
        margin:20
    },
    textInput: {
        borderWidth: 1,
        borderRadius:6,
        padding:16,
        borderColor: '#e4b0ff',
        backgroundColor:'#e4b0ff',
        width: '80%',
        marginRight: 8,
        padding: 8,
        color:'#120438'
    },
    buttonContainer:{
        marginTop:18,
        flexDirection:'row'
    },
    button:{
       width:'30%',
       marginHorizontal:8 
    }
})