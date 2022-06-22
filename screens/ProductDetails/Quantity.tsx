import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {labels} from '../../utils/strings';
import {useAppDispatch, useAppSelector} from '../../utils/hooks/reduxHooks';
import {
  setDecrementQuantity,
  setIncrementQuantity,
} from '../../utils/redux/productDetailsSlice';

const Quantity = () => {
  const dispatch = useAppDispatch();
  const selQuantity = useAppSelector(
    state => state.productDetailsSlice.quantity,
  );
  const handleIncrementQuantity = () => {
    dispatch(setIncrementQuantity(1));
  };
  const handleDecrementQuantity = () => {
    if (selQuantity > 0) dispatch(setDecrementQuantity(1));
  };
  return (
    <View style={styles.quantityMainView}>
      <TouchableOpacity
        style={styles.quantityBtn}
        disabled={selQuantity == 0 ? true : false}
        onPress={handleDecrementQuantity}>
        <Text style={styles.quantitySymbolText}>{labels.minusSymbol}</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{selQuantity}</Text>
      <TouchableOpacity
        style={styles.quantityBtn}
        onPress={handleIncrementQuantity}>
        <Text style={styles.quantitySymbolText}>{labels.plusSymbol}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quantity;
