import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {labels} from '../../../utils/strings';
import {colors} from '../../../utils/colors';

interface PriceTextProps {
  price: number;
}

const PriceText = ({price}: PriceTextProps) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={styles.productDetailDollarSign}>{labels.dollarSign}</Text>
      <Text style={styles.productDetailPriceWhole}>{Math.trunc(price)}</Text>
      <Text style={styles.productDetailDollarSign}>
        {' ' + parseInt((price % 1).toFixed(2).substring(2))}
      </Text>
    </View>
  );
};

export default PriceText;
const styles = StyleSheet.create({
  productDetailDollarSign: {
    lineHeight: 14,
    fontSize: 11,
    color: colors.black,
  },
  productDetailPriceWhole: {
    fontSize: 22,
    color: colors.black,
  },
});
