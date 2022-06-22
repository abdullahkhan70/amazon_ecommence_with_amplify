import {View, Text, TextInput} from 'react-native';
import React, {FC} from 'react';
import {userStateZipCode} from '../../utils/hooks/types/userInfoTypes';
import {styles} from './styles';

const StateZipCode: FC<userStateZipCode> = ({
  stateTitle,
  zipCodeTitle,
  props,
}) => {
  return (
    <View style={styles.stateZipCodeContainer}>
      <View>
        <Text style={styles.stateTitle}>{stateTitle}</Text>
        <TextInput
          style={styles.stateInput}
          onChangeText={props.handleChange('state')}
          value={props.values.state}
          onBlur={props.handleBlur('state')}
        />
        <Text style={styles.errorText}>
          {props.touched.state && props.errors.state}
        </Text>
      </View>
      <View>
        <Text style={styles.stateTitle}>{zipCodeTitle}</Text>
        <TextInput
          style={styles.stateInput}
          onChangeText={props.handleChange('zipCode')}
          value={props.values.zipCode}
          keyboardType={'number-pad'}
          onBlur={props.handleBlur('zipCode')}
        />
        <Text style={styles.errorText}>
          {props.touched.zipCode && props.errors.zipCode}
        </Text>
      </View>
    </View>
  );
};

export default StateZipCode;
