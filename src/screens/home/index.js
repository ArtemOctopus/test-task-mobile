import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import ProfileImage from '../../assets/images/profile.png'
import NotificationImage from '../../assets/images/notification.png'
import NewsImage from '../../assets/images/news.png'

import Notification from '../../components/notification'
import { scale, verticalScale } from '../../utils/dimensions'
import { COLORS } from '../../constants/colors'
import News from '../../components/news'

const styles = StyleSheet.create({
  safeAreaContainer: {
    height: '100%',
    width: '100%'
  },
  scrollContainer: {
    flexGrow: 1,
    // height: '100%',
    padding: scale(20),
    alignItems: 'center'
  },
  personImage: {
    width: scale(152),
    height: scale(152)
  },
  personName: {
    fontWeight: '600',
    fontSize: scale(20),
    color: COLORS.BLACK_TEXT,
    marginTop: verticalScale(15)
  },
  imageLabel: {
    fontWeight: '400',
    fontSize: scale(18),
    color: COLORS.BLACK_TEXT,
    marginTop: verticalScale(10)
  },
  blockTitle: {
    fontWeight: '400',
    fontSize: scale(18),
    color: COLORS.BLACK_TEXT,
    marginBottom: verticalScale(10),
    marginTop: verticalScale(28),
    textAlign: 'left',
    width: '100%'
  }
});

const news = [
  {
    id: 0,
    image: NewsImage,
    date: '20.03.2023',
    name: 'Вебинар',
    text: 'В Госдуму внесен законопроект, направленный на реформирование пенсий'
  },
  {
    id: 1,
    image: NewsImage,
    date: '20.03.2023',
    name: 'Вебинар',
    text: 'В Госдуму внесен законопроект, направленный на реформирование пенсий'
  }
]

const Home = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={ProfileImage} style={styles.personImage} />
        <Text style={styles.imageLabel}>Ваш бухгалтер</Text>
        <Text style={styles.personName}>Наталья Анашкина</Text>
        <Text style={styles.blockTitle}>Уведомления</Text>
        <Notification id='some notif id' image={NotificationImage} text="Добавьте вашу первую компанию" />
        <Text style={styles.blockTitle}>Новости</Text>
        {news.map(element =>
          <News
            key={element.id}
            image={element.image}
            date={element.date}
            name={element.name}
            text={element.text}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home