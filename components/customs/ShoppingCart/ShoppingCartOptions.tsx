import {View, Text, PixelRatio, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {labels} from '../../../utils/strings';
import {kFormatter} from '../CustomMethods/CommaSeparator';
import {shoppingCartOptions} from '../../../utils/hooks/types/shoppingCartTypes';
import {useNavigation} from '@react-navigation/native';
const ShoppingCartOptions: FC<shoppingCartOptions> = ({
  deleteBtn,
  saveLaterBtn,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <MaterialCommunityIcons
          style={styles.deleteIcon}
          name="delete"
          size={PixelRatio.getPixelSizeForLayoutSize(8)}
        />
        <View style={styles.totalQunatityView}>
          <Text style={styles.totalQuantityText}>
            {kFormatter(Number(labels.totalQuantity))}
          </Text>
        </View>
        <Entypo
          style={styles.plusIcon}
          name="plus"
          size={PixelRatio.getPixelSizeForLayoutSize(8)}
        />
      </View>
      <TouchableOpacity style={styles.deleteBtn} onPress={deleteBtn}>
        <Text style={styles.deleteBtnText}>{labels.deleteText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.deleteBtn,
          marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(1.5),
        }}
        onPress={saveLaterBtn}>
        <Text style={styles.deleteBtnText}>{labels.saveLater}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingCartOptions;
