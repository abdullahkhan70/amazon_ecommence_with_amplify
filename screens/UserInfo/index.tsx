import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  PixelRatio,
  Platform,
} from 'react-native';
import React from 'react';
import Toolbar from './Toolbar';
import {FocusAwareStatusBar} from '../../components/customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {colors} from '../../utils/colors';
import CountryPickers from './CountryPicker';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../utils/hooks/reduxHooks';
import {
  setCountryPickerModal,
  setCountryPickerName,
  setMarkAsDefault,
  setUserAddressOptionalInfo,
  setUserAddressRequriedInfo,
  setUserCity,
  setUserFullName,
  setUserPhoneNumber,
  setUserState,
  setUserZipCode,
} from '../../utils/redux/userInfoSlice';
import CountryPicker from 'react-native-country-codes-picker';
import InputField from './InputField';
import {labels} from '../../utils/strings';
import {Formik} from 'formik';
import Buttons from '../ProductDetails/Buttons';
import StateZipCode from './StateZipCode';
import MarkAsDefault from './MarkAsDefault';
import {userInfoValidation} from '../../utils/validation/userInfoValidation';
import DeliveryInstrucs from './DeliveryInstrucs';
const UserInfo = () => {
  const dispatch = useAppDispatch();
  const selUserCountryPickerName = useAppSelector(
    state => state?.userInfoSlice?.countryPickerName,
  );
  const selCountryPickerModal = useAppSelector(
    state => state?.userInfoSlice?.countryPickerModal,
  );

  const seluserFullName = useAppSelector(
    state => state?.userInfoSlice?.userFullName,
  );

  const selUserPhoneNumber = useAppSelector(
    state => state?.userInfoSlice?.userPhoneNumber,
  );

  const selUserAddressRequriedInfo = useAppSelector(
    state => state?.userInfoSlice?.userAddressRequriedInfo,
  );

  const selUserAddressOptionalInfo = useAppSelector(
    state => state?.userInfoSlice?.userAddressOptionalInfo,
  );

  const selUserCity = useAppSelector(state => state?.userInfoSlice?.userCity);
  const selMarkAsDefault = useAppSelector(
    state => state?.userInfoSlice?.userMarkAsDefault,
  );

  const handleCountryPickerModal = () => {
    dispatch(setCountryPickerModal(Boolean(!selCountryPickerModal)));
  };
  return (
    <>
      <FocusAwareStatusBar
        backgroundColor={colors.homeScreenStatusBar}
        barStyle={'light-content'}
      />
      <Toolbar />

      <Formik
        initialValues={{
          fullName: '',
          phoneNo: '',
          requiredAddress: '',
          optionalAddress: '',
          city: '',
          state: '',
          zipCode: '',
        }}
        validationSchema={userInfoValidation}
        onSubmit={(values, actions) => {
          dispatch(setUserFullName(String(values.fullName)));
          dispatch(setUserPhoneNumber(String(values.phoneNo)));
          dispatch(setUserAddressRequriedInfo(String(values.requiredAddress)));
          dispatch(setUserAddressOptionalInfo(String(values.optionalAddress)));
          dispatch(setUserCity(String(values.city)));
          dispatch(setUserState(String(values.state)));
          dispatch(setUserZipCode(String(values.zipCode)));
          console.log(JSON.stringify(values));
          actions.resetForm();
        }}>
        {props => (
          <View style={styles.container}>
            <KeyboardAvoidingView>
              <ScrollView showsVerticalScrollIndicator={false}>
                <CountryPickers
                  countryName={selUserCountryPickerName}
                  handleCountryPickerModal={handleCountryPickerModal}
                />
                <View>
                  <InputField
                    title={labels.fullNameText}
                    marginTops={3}
                    inputTextAreaMarginTop={2}
                    value={seluserFullName}
                    // inputFiled={setUserFullName}
                    props={props}
                    valueChange={'fullName'}
                    defaultValue={props.values.fullName}
                    errorText={props.errors.fullName}
                    touched={props.touched.fullName}
                  />
                  <InputField
                    title={labels.phoneNumberText}
                    marginTops={3}
                    inputTextAreaMarginTop={2}
                    value={selUserPhoneNumber}
                    // inputFiled={setUserPhoneNumber}
                    inputType={'number-pad'}
                    props={props}
                    valueChange={'phoneNo'}
                    defaultValue={props.values.phoneNo}
                  />
                  <InputField
                    title={labels.addressText}
                    // marginTops={1}
                    inputTextAreaMarginTop={2}
                    value={selUserAddressRequriedInfo}
                    // inputFiled={setUserAddressRequriedInfo}
                    placeHolder={labels.addressRequiredText}
                    props={props}
                    valueChange={'requiredAddress'}
                    defaultValue={props.values.requiredAddress}
                    errorText={props.errors.requiredAddress}
                    touched={props.touched.requiredAddress}
                  />
                  <InputField
                    marginTops={0}
                    value={selUserAddressOptionalInfo}
                    inputTextAreaMarginTop={2}
                    // inputFiled={setUserAddressOptionalInfo}
                    placeHolder={labels.addressOptionalText}
                    props={props}
                    valueChange={'optionalAddress'}
                    defaultValue={props.values.optionalAddress}
                  />
                  <InputField
                    title={labels.cityText}
                    // marginTops={3}
                    inputTextAreaMarginTop={2}
                    value={selUserCity}
                    // inputFiled={setUserCity}
                    props={props}
                    valueChange={'city'}
                    defaultValue={props.values.city}
                    errorText={props.errors.city}
                    touched={props.touched.city}
                  />
                  <StateZipCode
                    stateTitle={labels.stateText}
                    zipCodeTitle={labels.zipCodeText}
                    props={props}
                  />
                  <MarkAsDefault
                    title={labels.markAsDefaultAddress}
                    checkBoxChangeValue={setMarkAsDefault}
                    checkBoxValue={selMarkAsDefault}
                  />
                  <DeliveryInstrucs />
                  <Buttons
                    buttonText={labels.useAddess}
                    buttonBackgroundColor={colors.addCartColor}
                    marginTop={10}
                    onPress={props.handleSubmit}
                  />
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        )}
      </Formik>
      <CountryPicker
        show={selCountryPickerModal}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item: any) => {
          console.log(JSON.stringify(item));
          dispatch(setCountryPickerName(String(item.name.en)));
          dispatch(setCountryPickerModal(Boolean(!selCountryPickerModal)));
        }}
        onBackdropPress={() =>
          dispatch(setCountryPickerModal(Boolean(!selCountryPickerModal)))
        }
      />
    </>
  );
};

export default UserInfo;
