import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {FocusAwareStatusBar} from '../../components/customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {colors} from '../../utils/colors';
import {styles} from './styles';
import SearchBar from './SearchBar';
import Location from './Location';
import Products from './Products';
import {screens} from '../../utils/strings';

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={colors.homeScreenStatusBar}
        barStyle={'light-content'}
      />
      <SearchBar backButton={true} />
      <Location />
      <Products screenName={screens.PRODUCTDETAILS} />
    </SafeAreaView>
  );
};

export default index;
