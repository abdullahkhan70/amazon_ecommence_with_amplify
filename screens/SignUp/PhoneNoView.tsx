import {
  View,
  Text,
  TextInput,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {signInTypes} from '../../utils/hooks/types/signInTypes';
import {useAppDispatch, useAppSelector} from '../../utils/hooks/reduxHooks';
import {setSignUpCountryPickerModal} from '../../utils/redux/signUpSlice';

const PhoneNoView: FC<signInTypes> = ({
  hint = '',
  props,
  title = '',
  value = '',
  valueName = '',
  errorMessage = '',
  marginTopView,
  touched = false,
}) => {
  const dispatch = useAppDispatch();
  const selSignUpPhoneNumberCode = useAppSelector(
    state => state?.signUpSlice.signUpPhoneNumberCode,
  );
  const selSignUpCountryPickerModal = useAppSelector(
    state => state?.signUpSlice.signUpCountryPickerModal,
  );
  const handleCountryPickerBtn = () => {
    dispatch(
      setSignUpCountryPickerModal(Boolean(!selSignUpCountryPickerModal)),
    );
  };
  return (
    <View style={{marginBottom: -PixelRatio.getPixelSizeForLayoutSize(4)}}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.phoneNumberBtn}
          onPress={handleCountryPickerBtn}>
          <Text style={styles.phoneNumberText}>{selSignUpPhoneNumberCode}</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder={hint}
          onChangeText={props.handleChange(valueName)}
          onBlur={props.handleBlur(valueName)}
          value={value}
        />
      </View>
      <Text style={styles.errorMessage}>{touched && errorMessage}</Text>
    </View>
  );
};

export default PhoneNoView;
