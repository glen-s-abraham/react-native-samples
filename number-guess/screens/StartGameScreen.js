import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Alert, Text, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

export default function StartGameScreen({ onNumberPick }) {
    const { width, height } = useWindowDimensions();

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

    const marginTop = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.rootContainer, { marginTop }]}>
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
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const isValidNumberInput = (number) => !isNaN(number) && number > 0 && number <= 99;

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        //marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: "center"
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