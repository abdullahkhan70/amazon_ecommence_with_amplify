import {Dimensions, StyleSheet, PixelRatio} from 'react-native';
import {colors} from '../../utils/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  signInText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    letterSpacing: 1.2,
  },
  phoneNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  phoneNumberBtn: {
    borderRadius: 7,
    borderWidth: 2,
    borderColor: colors.lightGray,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
    width: width / 2 - 100,
  },
  title: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
    fontWeight: '700',
    fontSize: 15,
    color: colors.signInTitleColor,
  },
  textInput: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
    borderWidth: 2,
    borderColor: colors.lightGray,
    borderRadius: 5,
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(5),
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(2),
    width: width - 110,
  },
  errorMessage: {
    fontSize: 15,
    fontWeight: '600',
    color: 'red',
  },
});
