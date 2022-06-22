import {View, Text, PixelRatio} from 'react-native';
import React from 'react';
import products from '../../utils/lists/products';
import {styles} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../utils/colors';
const Header = () => {
  return (
    <View style={styles.headerMainView}>
      <Text style={styles.productTitle}>{products[0].title}</Text>
      <Feather
        name="download"
        color={colors.gray}
        size={PixelRatio.getPixelSizeForLayoutSize(12)}
      />
    </View>
  );
};

export default Header;
