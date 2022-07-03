import {View, Text} from 'react-native';
import React from 'react';
import {FocusAwareStatusBar} from '../../components/customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {colors} from '../../utils/colors';
import {Formik} from 'formik';
import SignInTextInput from '../SignIn/SignInTextInputs';
import {labels} from '../../utils/strings';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../utils/hooks/reduxHooks';
import {useNavigation} from '@react-navigation/native';
import {
  setSignUpCountryPickerModal,
  setSignUpEmail,
  setSignUpPassword,
  setSignUpPhoneNumber,
  setSignUpPhoneNumberCode,
  setSignUpUserName,
} from '../../utils/redux/signUpSlice';
import PhoneNoView from './PhoneNoView';
import CountryPicker from 'react-native-country-codes-picker';
import Buttons from '../ProductDetails/Buttons';

const index = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const selSignUpCountryPickerModal = useAppSelector(
    state => state?.signUpSlice.signUpCountryPickerModal,
  );
  return (
    <>
      <View style={styles.container}>
        <FocusAwareStatusBar
          backgroundColor={colors.white}
          barStyle={'dark-content'}
        />

        <Text style={styles.signInText}>{labels.createNewAccount}</Text>
        <Formik
          initialValues={{userName: '', passWord: '', email: '', phoneNo: ''}}
          onSubmit={(values, actions) => {
            console.log(values);
            dispatch(setSignUpUserName(String(values.userName)));
            dispatch(setSignUpPassword(String(values.passWord)));
            dispatch(setSignUpEmail(String(values.email)));
            dispatch(setSignUpPhoneNumber(String(values.phoneNo)));
            actions.resetForm();
          }}>
          {props => (
            <View>
              <SignInTextInput
                hint={labels.usernameText}
                title={labels.userNameHint}
                props={props}
                value={props.values.userName}
                valueName={'userName'}
                errorMessage={props.errors.userName}
                touched={props.touched.userName}
              />
              <SignInTextInput
                hint={labels.passwordHint}
                title={labels.passwordTexts}
                props={props}
                value={props.values.passWord}
                valueName={'passWord'}
                errorMessage={props.errors.passWord}
                touched={props.touched.passWord}
              />
              <SignInTextInput
                hint={labels.emailHint}
                title={labels.emailSignUpText}
                props={props}
                value={props.values.email}
                valueName={'email'}
                errorMessage={props.errors.email}
                touched={props.touched.email}
              />
              <PhoneNoView
                title={labels.phoneNumberSignUpText}
                hint={labels.phoneNumberHint}
                props={props}
                touched={props.touched.phoneNo}
                value={props.values.phoneNo}
                valueName={'phoneNo'}
                errorMessage={props.errors.phoneNo}
              />
              <Buttons
                buttonText={labels.signUpBtnText}
                marginTop={5}
                buttonBackgroundColor={colors.signInBtnColors}
                textColor={colors.white}
                onPress={props.handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
      <CountryPicker
        show={selSignUpCountryPickerModal}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item: any) => {
          dispatch(setSignUpPhoneNumberCode(String(item?.dial_code)));
          dispatch(
            setSignUpCountryPickerModal(Boolean(!selSignUpCountryPickerModal)),
          );
        }}
      />
    </>
  );
};

export default index;
