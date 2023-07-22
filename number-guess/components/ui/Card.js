import React, { Children } from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../../constants/colors'

export default function Card({children}) {
  return (
    <View style={styles.card}>{children}</View>
  )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: 36,
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: colors.primary800
    },
})