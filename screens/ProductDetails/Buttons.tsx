import {View, Text, TouchableOpacity, PixelRatio} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {ButtonsProps} from '../../utils/hooks/types/productDetailTypes';
import {colors} from '../../utils/colors';

const Buttons: FC<ButtonsProps> = ({
  buttonBackgroundColor,
  buttonText,
  marginTop,
  onPress,
  borderWidth = false,
  textColor = colors.black,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.buttonStyle,
        backgroundColor: buttonBackgroundColor,
        marginTop: PixelRatio.getPixelSizeForLayoutSize(marginTop),
        borderWidth: borderWidth ? 1 : 0,
      }}
      onPress={onPress}>
      <Text style={{...styles.buttonText, color: textColor}}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;
