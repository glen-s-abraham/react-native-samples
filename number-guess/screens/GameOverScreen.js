import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({roundsNumber,userNUmber,onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainerStyle}>
      <Image style={styles.image}source={require('../assets/images/success.png')}/>
      </View>
      <View>
        <Text style={styles.summryText}>Your Phone Needed <Text style={styles.highlight}>{roundsNumber}</Text> round to guess the number <Text style={styles.highlight}>{userNUmber}</Text></Text>
        <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    padding:24,
    justifyContent:'center',
    alignItems:'center'
  },
  imageContainerStyle:{
    width:300,
    height:300,
    borderRadius:150,
    borderColor:colors.primary800,
    overflow:"hidden",
    margin:36
  },
  image:{
    width:"100%",
    height:"100%"
  },
  summryText:{
    fontFamily:'open-sans',
    fontSize:24,
    textAlign:'center',
    marginBottom:24
  },
  highlight:{
    fontFamily:'open-sans-bold',
    color:colors.primary500
  }
})