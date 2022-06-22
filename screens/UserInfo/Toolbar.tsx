import {View, Text, PixelRatio, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {labels} from '../../utils/strings';
import {colors} from '../../utils/colors';

const Toolbar = () => {
  return (
    <View style={styles.toolBarContainer}>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Ionicons
          name={'arrow-back'}
          size={PixelRatio.getPixelSizeForLayoutSize(10)}
          color={colors.white}
        />
      </TouchableOpacity>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.enterUserAddress}>
          {labels.enterUserAddressInfo}
        </Text>
      </View>
    </View>
  );
};

export default Toolbar;
