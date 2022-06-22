import {View, Text} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {styles} from './styles';
import {colors} from '../../utils/colors';
import {useAppDispatch, useAppSelector} from '../../utils/hooks/reduxHooks';
import {setShoppingGifts} from '../../utils/redux/shoppingCartSlice';
import Feather from 'react-native-vector-icons/Feather';
import {labels} from '../../utils/strings';
const AddGifts = () => {
  const dispatch = useAppDispatch();
  const selShoppingCartGiftCheckbox = useAppSelector(
    state => state.shoppingCartSlice.shoppingCartGiftCheckbox,
  );
  return (
    <View style={styles.addGiftsMainView}>
      <BouncyCheckbox
        size={25}
        fillColor={colors.lightBlue}
        iconStyle={{
          borderColor: colors.lightGray,
          borderRadius: 5,
          borderWidth: selShoppingCartGiftCheckbox ? 0 : 3,
        }}
        textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={(isChecked: boolean) => {
          dispatch(setShoppingGifts(isChecked));
        }}
      />
      <Feather name="gift" color={colors.gray} size={20} />
      <Text style={styles.addGiftReceiptText}>{labels.addGiftReceipt}</Text>
    </View>
  );
};

export default AddGifts;
