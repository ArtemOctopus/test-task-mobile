import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors';
import { scale, verticalScale } from '../../utils/dimensions';

import { useNavigation } from '@react-navigation/native';
import { AppRoute } from '../../constants/routes';
import { TouchableOpacity } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: scale(20),
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    width: '100%',
    shadowOffset: {
      width: 0
    },
    shadowOpacity: 1,
    shadowRadius: scale(3),
    shadowColor: COLORS.YELLOW
  },
  image: {
    height: verticalScale(84),
    width: scale(97),
    borderRadius: 100
  },
  text: {
    fontWeight: '400',
    fontSize: scale(14.5),
    color: COLORS.BLACK_TEXT,
    width: '50%',
    textAlign: 'center',
    marginLeft:'auto',
    marginRight:'auto',
  },
});

const Notification = ({ image, text, id }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(AppRoute.NEWS, {id})
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Notification