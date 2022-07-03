import {View, Text, TextInput, PixelRatio} from 'react-native';
import React, {FC} from 'react';
import {signInTypes} from '../../utils/hooks/types/signInTypes';
import {styles} from './styles';

const SignInTextInput: FC<signInTypes> = ({
  props,
  hint = '',
  title = '',
  touched = false,
  value = '',
  valueName = '',
  errorMessage = '',
  marginTopView = 0,
}) => {
  return (
    <View style={{marginBottom: -PixelRatio.getPixelSizeForLayoutSize(4)}}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={hint}
        onChangeText={props.handleChange(valueName)}
        onBlur={props.handleBlur(valueName)}
        value={value}
      />
      <Text style={styles.errorMessage}>{touched && errorMessage}</Text>
    </View>
  );
};

export default SignInTextInput;
