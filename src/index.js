import React, { useEffect } from 'react'
import { ImageBackground } from 'react-native'
import Router from './router'
import SplashScreen from 'react-native-splash-screen';

import MainBg from './assets/images/main.png'


const index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ImageBackground source={MainBg} style={{ width: '100%', height: '100%' }}>
      <Router />
    </ImageBackground>
  )

}

export default index