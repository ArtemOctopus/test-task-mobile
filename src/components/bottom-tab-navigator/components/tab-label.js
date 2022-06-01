import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { bottomTabNavLabels } from '../../../utils';
import { scale, verticalScale } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  label: {
    fontSize: scale(8),
    marginTop: verticalScale(6),
    opacity: .5
  },
  labelFocused: {
    fontSize: scale(10),
    marginTop: verticalScale(6),
    opacity: 1
  },
});

const TabLabel = ({ label, isFocused }) => {

  return (
    <Text
      numberOfLines={1}
      style={isFocused ? styles.labelFocused : styles.label}>
      {bottomTabNavLabels[label]}
    </Text>
  );
};

export default TabLabel;
