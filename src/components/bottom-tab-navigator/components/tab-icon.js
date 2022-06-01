import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { scale, verticalScale } from '../../../utils/dimensions';

import TabCalendarIcon from '../../../assets/icons/tab-calendar.svg'
import TabCompaniesIcon from '../../../assets/icons/tab-companies.svg'
import TabHomeIcon from '../../../assets/icons/tab-home.svg'
import TabMainIcon from '../../../assets/icons/tab-main.svg'
import TabProfileIcon from '../../../assets/icons/tab-profile.svg'
import { AppRoute } from '../../../constants/routes';
import { COLORS } from '../../../constants/colors';


const styles = StyleSheet.create({
  selected: {
    position: 'absolute',
    height: scale(30),
    width: scale(30),
    ...Platform.select({
      ios: {
        backgroundColor: 'white',
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowOpacity: 1,
        shadowRadius: scale(3),
      },
      android: {
        elevation: 1,
      },
    }),
    borderRadius: 100,
    shadowColor: COLORS.YELLOW
  }
});

export const renderIcon = ({ label, isFocused }) => {
  switch (label) {
    case AppRoute.HOME_STACK: {
      return (
        <TabHomeIcon width={scale(20)} height={verticalScale(20)} />
      )
    }
    case AppRoute.COMPANIES: {
      return (
        <TabCompaniesIcon width={scale(20)} height={verticalScale(20)} />
      )
    }
    case AppRoute.MAIN: {
      return (
        <TabMainIcon width={scale(50)} height={verticalScale(50)} />
      )
    }
    case AppRoute.CALENDAR: {
      return (
        <TabCalendarIcon width={scale(20)} height={verticalScale(20)} />
      )
    }
    case AppRoute.PROFILE: {
      return (
        < TabProfileIcon width={scale(20)} height={verticalScale(20)} />
      )
    }
    default:
      return null;
  }
};

const TabIcon = ({ label, isFocused }) => {
  return (label === AppRoute.MAIN ?
    <View style={{ position: 'absolute', bottom: verticalScale(15) }}>
      {renderIcon({ label, isFocused })}
    </View>
    :
    <View style={{ opacity: isFocused ? 1 : .5, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      {isFocused && <View
        style={styles.selected} />}
      {renderIcon({ label, isFocused })}
    </View>
  )
};

export default TabIcon;
