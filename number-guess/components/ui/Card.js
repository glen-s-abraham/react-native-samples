import React, { Children } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import colors from '../../constants/colors'

export default function Card({ children }) {
  return (
    <View style={styles.card}>{children}</View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: colors.primary800
  },
})