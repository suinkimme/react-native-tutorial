import React from 'react';
import { TouchableRipple, TouchableRippleProps } from 'react-native-paper';

const Touchable = (props: TouchableRippleProps) => {
  return <TouchableRipple rippleColor="rgba(0, 0, 0, .05)" {...props} />;
};

export default Touchable;
