import { StyleSheet } from 'react-native';
import { verticalScale, scale } from '../../utils/dimensions';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  bottomTabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: verticalScale(14),
    position: 'relative',
    justifyContent: 'center'
  },
  selected: {
    position: 'absolute',
    height: scale(30),
    width: scale(30),
    // backgroundColor: '',
    borderRadius: 100,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: scale(3),
    shadowColor: COLORS.YELLOW
  }
});
