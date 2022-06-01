import React from 'react'
import { View, ImageBackground, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'
import { scale, verticalScale } from '../../utils/dimensions'

const styles = StyleSheet.create({
  container: {
    height: verticalScale(164),
    width: '100%',
    borderRadius: scale(20),
    color: COLORS.WHITE,
    justifyContent: 'flex-end',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(40)
  },
  mgH20: {
    marginHorizontal: scale(20)
  },
  text: {
    color: COLORS.WHITE,
    fontSize: scale(14),
    fontWeight: '600'
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '80%',
    marginBottom: verticalScale(10)
  },
  moreText: {
    color: COLORS.WHITE,
    opacity: .5
  }
})

const News = ({ image, date, name, text }) => {

  return (
    <ImageBackground style={styles.container} source={image}>
      <Text style={[styles.text, styles.mgH20]}>{date} - {name}</Text>
      <View style={[styles.descriptionContainer, styles.mgH20]}>
        <Text numberOfLines={2} style={styles.text}>{text}</Text>
        <Text style={styles.moreText}>ещё</Text>
      </View>
    </ImageBackground>
  )
}

export default News