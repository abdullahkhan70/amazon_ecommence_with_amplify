import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../assets/images/amazon_logo.png')}
        style={styles.logoImg}
        resizeMethod="resize"
        resizeMode="contain"
      />
    </View>
  );
};

export default Logo;
