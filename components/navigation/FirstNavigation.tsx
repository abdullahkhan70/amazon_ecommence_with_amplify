import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, SignUp} from '../../screens';
import {screens} from '../../utils/strings';
import {Provider} from 'react-redux';
import {store} from '../../utils/store';

const Stack = createNativeStackNavigator();

export const FirstNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={screens.SIGNIN}>
          <Stack.Screen name={screens.SIGNUP} component={SignUp} />
          <Stack.Screen name={screens.SIGNIN} component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
