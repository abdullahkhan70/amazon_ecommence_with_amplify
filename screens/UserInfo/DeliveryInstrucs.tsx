import {View, Text, TouchableOpacity, PixelRatio} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {labels} from '../../utils/strings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../utils/colors';
const DeliveryInstrucs = () => {
  return (
    <TouchableOpacity>
      <View style={styles.deliveryContainer}>
        <View>
          <Text style={styles.deliveryFirstText}>
            {labels.deliveryInstructionsText}
          </Text>
          <Text style={styles.deliverySecondText}>
            {labels.deliveryInstructionsFurtherText}
          </Text>
        </View>
        <FontAwesome
          name={'caret-right'}
          size={PixelRatio.getPixelSizeForLayoutSize(8)}
          color={colors.black}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DeliveryInstrucs;
