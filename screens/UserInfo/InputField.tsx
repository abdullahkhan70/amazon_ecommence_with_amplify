import {
  View,
  Text,
  PixelRatio,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {userInputField} from '../../utils/hooks/types/userInfoTypes';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../utils/colors';
import {useAppDispatch} from '../../utils/hooks/reduxHooks';
const InputField: FC<userInputField> = ({
  title = '',
  value = '',
  marginTops = 0,
  inputTextAreaMarginTop = 0,
  placeHolder = '',
  inputType = 'default',
  props,
  valueChange = '',
  defaultValue,
  errorText = '',
  touched = false,
}) => {
  const dispatch = useAppDispatch();
  return (
    <View
      style={{
        ...styles.inputFieldView,
        marginTop:
          marginTops > 0 ? PixelRatio.getPixelSizeForLayoutSize(marginTops) : 0,
      }}>
      {title?.length > 0 && <Text style={styles.inputFieldTitle}>{title}</Text>}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          style={{
            ...styles.inputFieldArea,
            marginTop:
              inputTextAreaMarginTop > 0
                ? PixelRatio.getPixelSizeForLayoutSize(inputTextAreaMarginTop)
                : 0,
            paddingHorizontal: 0,
          }}
          // value={value}
          // onChangeText={text => dispatch(inputFiled(String(text)))}
          onChangeText={props.handleChange(valueChange)}
          value={defaultValue}
          placeholder={placeHolder}
          keyboardType={inputType}
          onBlur={props.handleBlur(valueChange)}
        />

        <View
          style={{
            ...styles.inputTextAreaDeleteIcon,
            padding:
              value?.length <= 0
                ? PixelRatio.getPixelSizeForLayoutSize(6)
                : PixelRatio.getPixelSizeForLayoutSize(6),
          }}>
          {defaultValue?.length > 0 && (
            <TouchableOpacity
              // onPress={() => dispatch(inputFiled(String('')))}
              style={{
                marginHorizontal: -PixelRatio.getPixelSizeForLayoutSize(3),
              }}
              onPress={() => props.setFieldValue(valueChange, '')}>
              <Entypo
                name={'cross'}
                size={PixelRatio.getPixelSizeForLayoutSize(8)}
                color={colors.black}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Text style={styles.errorText}>{touched && errorText}</Text>
    </View>
  );
};

export default InputField;
