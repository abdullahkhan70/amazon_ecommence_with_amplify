import {View, Text, PixelRatio, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {menuType} from '../../utils/hooks/types/menuTypes';
const Menu: FC<menuType> = ({
  color,
  size,
  onPress,
  text,
  iconName,
  marginTopStyle = 0,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.menuBtn,
        marginTop:
          marginTopStyle > 0
            ? PixelRatio.getPixelSizeForLayoutSize(marginTopStyle)
            : 0,
      }}>
      <View style={styles.menuContainer}>
        <FontAwesome5
          name={iconName}
          color={color}
          size={PixelRatio.getPixelSizeForLayoutSize(size)}
        />
        <Text style={styles.menuText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Menu;
