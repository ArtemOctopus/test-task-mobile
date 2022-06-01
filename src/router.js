import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home';
import CompaniesScreen from './screens/companies';
import CalendarScreen from './screens/calendar';
import ProfileScreen from './screens/profile';
import NewsScreen from './screens/news'

import BottomNavigator from './components/bottom-tab-navigator';
import { AppRoute } from './constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NewsRouter = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AppRoute.HOME}
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={AppRoute.NEWS}
      component={NewsScreen}
    />
  </Stack.Navigator>
)


const Router = () => {


  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'transparent',
        },
      }}

    >
      <Tab.Navigator
        tabBar={props => <BottomNavigator {...props} />}
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name={AppRoute.HOME_STACK} component={NewsRouter} />
        <Tab.Screen name={AppRoute.COMPANIES} component={CompaniesScreen} />
        <Tab.Screen name={AppRoute.MAIN} component={ProfileScreen} />
        <Tab.Screen name={AppRoute.CALENDAR} component={CalendarScreen} />
        <Tab.Screen name={AppRoute.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router