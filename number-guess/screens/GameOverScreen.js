import { Dimensions, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({roundsNumber,userNUmber,onStartNewGame}) {
  const {width,height} = useWindowDimensions();
  let imageSize = 300;
  if(width<380){
    imageSize=150
  }
  if(height<400){
    imageSize = 80
  }
  const imageStyle = {
    width:imageSize,
    height:imageSize,
    borderRadius:imageSize/2
  }
  return (
    <ScrollView style={{flex:1}}>
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainerStyle,imageStyle]}>
      <Image style={styles.image}source={require('../assets/images/success.png')}/>
      </View>
      <View>
        <Text style={styles.summryText}>Your Phone Needed <Text style={styles.highlight}>{roundsNumber}</Text> round to guess the number <Text style={styles.highlight}>{userNUmber}</Text></Text>
        <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
      </View>
    </View>
    </ScrollView>
  )
}
// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    padding:24,
    justifyContent:'center',
    alignItems:'center'
  },
  imageContainerStyle:{
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