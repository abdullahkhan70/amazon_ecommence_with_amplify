import React, {useEffect} from 'react';
import {View} from 'react-native';
import SecondaryNavigation from './components/navigation/SecondaryNavigation';
// @ts-ignore
import {withAuthenticator, Authenticator} from 'aws-amplify-react-native';
import awsConfig from './src/aws-exports';
import {Amplify} from 'aws-amplify';
import {useAppDispatch, useAppSelector} from './utils/hooks/reduxHooks';
import {Provider} from 'react-redux';
import {store} from './utils/store';

Amplify.configure(awsConfig);
const App = () => {
  const selUsers = useAppSelector(state => state?.userSlice?.users);
  useEffect(() => {
    console.log(selUsers);
  }, []);
  return (
    <Provider store={store}>
      <SecondaryNavigation />
    </Provider>
  );
};
export default withAuthenticator(App);
