import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Linking, Platform} from 'react-native';
import {Provider} from 'react-redux';
import ProductDetail from '../../screens/ProductDetails/ProductDetail';
import {store} from '../../utils/store';
import {screens} from '../../utils/strings';
import {BottomNavigation} from './BottomNavigation';
import awsConfig from '../../src/aws-exports';
import {Amplify} from 'aws-amplify';
const Stack = createNativeStackNavigator();
const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
// @ts-ignore
import {withAuthenticator} from 'aws-amplify-react-native';
Amplify.configure(awsConfig);
const SecondaryNavigation = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={state =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={screens.BOTTOMNAV} component={BottomNavigation} />
          <Stack.Screen
            name={screens.PRODUCTDETAILS}
            component={ProductDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default withAuthenticator(SecondaryNavigation);
