import {View, Text, TouchableOpacity, PixelRatio} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {labels} from '../../utils/strings';
import {colors} from '../../utils/colors';

interface ContentSubProps {
  firstText: string;
  otherSellers: string;
  lastText: string;
  showSecondText: Boolean;
  mainViewMarginTop: number;
  textColors: string;
}

const ContentSub: FC<ContentSubProps> = ({
  firstText,
  otherSellers,
  lastText,
  showSecondText,
  mainViewMarginTop,
  textColors,
}) => {
  return (
    <View
      style={{
        ...styles.importTextView,
        marginTop: PixelRatio.getPixelSizeForLayoutSize(mainViewMarginTop),
      }}>
      <Text style={{...styles.productImportText, color: textColors}}>
        {firstText}{' '}
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginVertical: PixelRatio.getPixelSizeForLayoutSize(2),
          }}>
          <Text style={styles.productDetailsText}>{otherSellers}</Text>
        </TouchableOpacity>{' '}
        {showSecondText ? (
          <Text style={{...styles.productImportText, color: colors.black}}>
            {lastText}
          </Text>
        ) : (
          <View />
        )}
      </Text>
    </View>
  );
};

export default ContentSub;
