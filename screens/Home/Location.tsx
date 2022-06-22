import {View, Text, PixelRatio} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {styles} from './styles';
import {labels} from '../../utils/strings';
const Location = () => {
  return (
    <View style={styles.locationMainContainer}>
      <Octicons
        name={'location'}
        size={PixelRatio.getPixelSizeForLayoutSize(8)}
      />
      <Text style={styles.locationDelieverPlace}>
        {labels.delieverTo + 'Pakistan'}
      </Text>
    </View>
  );
};

export default Location;
