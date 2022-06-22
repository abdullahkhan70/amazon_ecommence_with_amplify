import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {userMarkAsDefault} from '../../utils/hooks/types/userInfoTypes';
import {styles} from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {colors} from '../../utils/colors';
import {useAppDispatch} from '../../utils/hooks/reduxHooks';

const MarkAsDefault: FC<userMarkAsDefault> = ({
  title,
  checkBoxChangeValue,
  checkBoxValue,
}) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.markAsDefaultContainer}>
      <BouncyCheckbox
        size={25}
        fillColor={colors.lightBlue}
        iconStyle={{
          borderColor: colors.lightGray,
          borderRadius: 5,
          borderWidth: checkBoxValue ? 1 : 3,
        }}
        textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={(isChecked: boolean) => {
          dispatch(checkBoxChangeValue(Boolean(!isChecked)));
        }}
      />
      <Text style={styles.markAsDefaultTitle}>{title}</Text>
    </View>
  );
};

export default MarkAsDefault;
