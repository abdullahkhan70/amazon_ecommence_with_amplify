import {
  View,
  Text,
  TouchableHighlight,
  Keyboard,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import React from 'react';
import {FocusAwareStatusBar} from '../../components/customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {colors} from '../../utils/colors';
import {styles} from './styles';
import {Formik} from 'formik';
import {labels, screens} from '../../utils/strings';
import SignInTextInput from './SignInTextInputs';
import Buttons from '../ProductDetails/Buttons';
import {useAppDispatch} from '../../utils/hooks/reduxHooks';
import {
  setSignInPassword,
  setSignInUserName,
} from '../../utils/redux/signInSlice';
import {useNavigation} from '@react-navigation/native';

const index = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const handleSignUpBtn = () => {
    navigation.navigate(screens.SIGNUP as never);
  };
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <Text style={styles.signInText}>{labels.signInText}</Text>
      <Formik
        initialValues={{userName: '', passWord: ''}}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values));
          dispatch(setSignInUserName(String(values.userName)));
          dispatch(setSignInPassword(String(values.userName)));
          actions.resetForm();
        }}>
        {props => (
          <View>
            <SignInTextInput
              title={labels.usernameText}
              hint={labels.userNameHint}
              props={props}
              touched={props.touched.userName}
              value={props.values.userName}
              valueName={'userName'}
              errorMessage={props.errors.userName}
            />
            <SignInTextInput
              title={labels.passwordTexts}
              hint={labels.passwordHint}
              props={props}
              touched={props.touched.passWord}
              value={props.values.passWord}
              valueName={'passWord'}
              errorMessage={props.errors.passWord}
            />
            <Buttons
              buttonText={labels.signInBtnText}
              marginTop={5}
              buttonBackgroundColor={colors.signInBtnColors}
              textColor={colors.white}
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
      <TouchableOpacity
        style={styles.createAnAccountBtn}
        onPress={handleSignUpBtn}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.createAnAccountText}>
            {labels.createAnAccount}
          </Text>
          <Text style={styles.createAnAccountSignUpText}>
            {labels.signUpBtnText}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default index;
