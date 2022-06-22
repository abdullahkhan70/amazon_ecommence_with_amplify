import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
const {width} = Dimensions.get('window');

interface CustomTextProps {
  firstText?: string;
  secondText?: string;
  thirdText?: string;
  firstTextColor?: string;
}
const CustomText = (props: CustomTextProps) => {
  return (
    <View style={styles.container}>
      {props?.firstText?.length > 0 ? (
        <Text style={{...styles.firstText, color: props?.firstTextColor}}>
          {props.firstText}
        </Text>
      ) : (
        <View />
      )}
      {props?.secondText?.length > 0 ? (
        <Text>{props.secondText}</Text>
      ) : (
        <View />
      )}
      {props?.thirdText?.length > 0 ? <Text>{props.thirdText}</Text> : <View />}
    </View>
  );
};

export default CustomText;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width - 40,
    alignSelf: 'center',
  },
  firstText: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '700',
  },
});
