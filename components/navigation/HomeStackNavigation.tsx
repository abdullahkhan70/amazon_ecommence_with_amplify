import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home, productDetails} from '../../screens';
import {screens} from '../../utils/strings';

const Stack = createNativeStackNavigator();

export const HomeStackNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screens.HOME} component={Home} />
        <Stack.Screen
          name={screens.PRODUCTDETAILS}
          component={productDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
