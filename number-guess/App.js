import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';




export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [isGameOver,setIsGameOver] = useState();
  const [guessRounds,setGuessRounds] = useState(0);

  const [fontsLoaded]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  const handleNumberPick =(pickedNumber)=> {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }
  const handleGameOver = (numberOfRounds)=>{
    setIsGameOver(true)
    setGuessRounds(numberOfRounds)
  }
  const handleStartNewGame =()=>{
    setUserNumber(null);
    setGuessRounds(0);
    setIsGameOver(false);
  }
  let screen=<StartGameScreen onNumberPick={handleNumberPick}/>;
  if(userNumber) screen=<GameScreen userNumber={userNumber} onGameOver={handleGameOver}/>;
  if(isGameOver) screen=<GameOverScreen userNUmber={userNumber} roundsNumber={guessRounds} onStartNewGame={handleStartNewGame}/>
  
  return (

    <LinearGradient colors={[colors.primary700, colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView  style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage:{
    opacity:0.15
  }
});
