import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Home, ShoppingCart, UserInfo} from '../../screens';
import {screens} from '../../utils/strings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils/colors';
import {HomeStackNavigation} from './HomeStackNavigation';
import MenuScreen from '../../screens/MenuScreen';
const Tab = createBottomTabNavigator();

export const BottomNavigation = () => (
  <NavigationContainer independent={true}>
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.inActiveTabBarColor,
        tabBarActiveTintColor: colors.activeTabBarColor,
      }}
      initialRouteName={screens.HOMESTACK}>
      <Tab.Screen
        name={screens.HOMESTACK}
        component={HomeStackNavigation}
        options={{
          tabBarIcon(props) {
            return (
              <FontAwesome5 name="home" color={props.color} size={props.size} />
            );
          },
        }}
      />
      <Tab.Screen
        name={screens.USERINFO}
        component={UserInfo}
        options={{
          tabBarIcon(props) {
            return (
              <FontAwesome5
                name="users"
                color={props.color}
                size={props.size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={screens.SHOPPINGCART}
        component={ShoppingCart}
        options={{
          tabBarIcon(props) {
            return (
              <FontAwesome5
                name="shopping-bag"
                color={props.color}
                size={props.size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={screens.MENUSCREEN}
        component={MenuScreen}
        options={{
          tabBarIcon(props) {
            return (
              <Ionicons name="menu" color={props.color} size={props.size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
