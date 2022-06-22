import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {userInfoTypes} from '../../utils/hooks/types/userInfoTypes';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/colors';
const CountryPickers: FC<userInfoTypes> = ({
  countryName,
  handleCountryPickerModal,
}) => {
  return (
    <TouchableOpacity
      onPress={handleCountryPickerModal}
      style={styles.countryPickerBtn}>
      <View style={styles.countryPickerBtnView}>
        <Text style={styles.countryPickerText}>{countryName}</Text>
        <AntDesign name="caretdown" color={colors.black} />
      </View>
    </TouchableOpacity>
  );
};

export default CountryPickers;
