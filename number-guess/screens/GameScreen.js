import React, { useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userNumber));
  const [guessRounds, setGuessRounds] = useState([]);

  handleGuessRound = () => {
    setGuessRounds((prevRounds) => [...prevRounds, currentGuess]);
  }

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  //direction => lower,higher
  const handleNextGuess = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", "You know this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess
    }
    if (direction === 'higher') {
      minBoundary = currentGuess + 1;
    }
    setCurrentGuess(generateRandomBetween(minBoundary, maxBoundary, currentGuess));
    handleGuessRound();
  }

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(guessRounds.length);
  }, [currentGuess, userNumber, onGameOver])

  const guessRoundsListLenght = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionSet}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton style={styles.buttonContainer} onPress={() => handleNextGuess("higher")}><Ionicons name='md-add' size={24} color={'white'} /></PrimaryButton>
          <PrimaryButton style={styles.buttonContainer} onPress={() => handleNextGuess("lower")}><Ionicons name='md-remove' size={24} color={'white'} /></PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList data={guessRounds} renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLenght - itemData.index} guess={itemData.item} />} keyExtractor={(item) => item} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  instructionSet: {
    marginBottom: 12
  },
  listContainer:{
    flex:1,
    padding:16,
  }
})
