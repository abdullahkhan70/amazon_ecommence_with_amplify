import {
  View,
  Text,
  PixelRatio,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {labels} from '../../utils/strings';
import {colors} from '../../utils/colors';
import {useOrientation} from '../../utils/hooks/useOrientation';
const {width} = Dimensions.get('screen');

interface SearchBarProps {
  backButton?: boolean;
}

const SearchBar: FC<SearchBarProps> = ({backButton = false}) => {
  return (
    <View
      style={{
        ...styles.searchBarContainer,
      }}>
      {backButton ? (
        <TouchableOpacity>
          <Ionicons
            name={'arrow-back'}
            size={PixelRatio.getPixelSizeForLayoutSize(10)}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}

      <View style={styles.searchBarInnerContainer}>
        <View style={styles.searchBarSearchIcon}>
          <Feather
            name={'search'}
            size={PixelRatio.getPixelSizeForLayoutSize(7)}
          />
        </View>
        <TextInput
          style={{
            ...styles.searchBarInputBar,
            width: backButton ? width / 1.8 : width / 1.5,
          }}
          placeholder={labels.searchBarPlaceHolder}
        />
        <View style={styles.searchBarCameraIcon}>
          <TouchableOpacity>
            <Feather
              name={'camera'}
              size={PixelRatio.getPixelSizeForLayoutSize(7)}
              color={colors.gray}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.searchBarCameraIcon,
            borderTopRightRadius: 7,
            borderBottomRightRadius: 7,
          }}>
          <TouchableOpacity>
            <Feather
              name={'mic'}
              size={PixelRatio.getPixelSizeForLayoutSize(7)}
              color={colors.gray}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
