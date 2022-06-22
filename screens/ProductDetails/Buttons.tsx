import {View, Text, TouchableOpacity, PixelRatio} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';

interface ButtonsProps {
  buttonBackgroundColor: string;
  buttonText: string;
  marginTop: number;
  onPress?: () => void;
  borderWidth?: Boolean;
}

const Buttons: FC<ButtonsProps> = ({
  buttonBackgroundColor,
  buttonText,
  marginTop,
  onPress,
  borderWidth = false,
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
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;
