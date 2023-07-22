import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Alert, Text } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

export default function StartGameScreen({ onNumberPick }) {
    const [numberInput, setNumberInput] = useState('');
    const handleNumberInputChange = (text) => {
        setNumberInput(text);
    }
    const handleResetButtonClick = () => {
        setNumberInput('');
    }
    const handleConfirmButtonClick = () => {
        const number = parseInt(numberInput);
        if (!isValidNumberInput(number)) {
            Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: handleResetButtonClick }]);
            return;
        }
        onNumberPick(number);
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess my number</Title>
            <Card>
                <InstructionText>Enter number</InstructionText>
                <TextInput style={styles.numberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={numberInput}
                    onChangeText={handleNumberInputChange}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}><PrimaryButton onPress={handleResetButtonClick}>Reset</PrimaryButton></View>
                    <View style={styles.buttonContainer} ><PrimaryButton onPress={handleConfirmButtonClick}>Confirm</PrimaryButton></View>
                </View>

            </Card>
        </View>
    )
}

const isValidNumberInput = (number) => !isNaN(number) && number > 0 && number <= 99;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:"center"
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: colors.accent500,
        borderBottomWidth: 2,
        color: colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})