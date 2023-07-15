import React from 'react'
import { StyleSheet,Text } from 'react-native'
import colors from '../constants/colors'

export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        textAlign:'center',
        fontWeight:'bold',
        color:colors.accent500,
        borderWidth:2,
        borderColor:colors.accent500,
        padding:4
    }
})