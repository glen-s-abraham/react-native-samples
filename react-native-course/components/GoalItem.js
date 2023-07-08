import React from 'react'
import { StyleSheet, FlatList, Text,  Pressable, } from 'react-native'

export default function GoalItem({ item,onDeleteGoal }) {
  return (
    <Pressable onPress={()=>onDeleteGoal(item.id)} android_ripple={{color:'#dddddd'}}>
      <Text style={styles.goalItem}>{item.text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
})
