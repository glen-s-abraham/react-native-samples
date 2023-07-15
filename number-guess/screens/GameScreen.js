import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'

export default function GameScreen() {
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {/* Guess */}
        <Text>Higher or lower?</Text>
        {/* +- */}
        {/* <View>LOG ROUNDS</View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24
    }
})
