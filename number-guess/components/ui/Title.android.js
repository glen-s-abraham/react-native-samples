import React from 'react'
import { Platform, StyleSheet,Text } from 'react-native'
import colors from '../../constants/colors'

export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize:24,
        textAlign:'center',
        color:'white',
        borderWidth:2,
        borderColor:'white',
        padding:4,
        maxWidth:'80%',
        minWidth:'80%'
    }
})