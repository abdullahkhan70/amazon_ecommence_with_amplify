import {Dimensions, StyleSheet, PixelRatio} from 'react-native';
import {colors} from '../../utils/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtotalView: {
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
  },
  addGiftsMainView: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(6),
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainer: {
    padding: PixelRatio.getPixelSizeForLayoutSize(2),
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(1.5),
  },
  addGiftReceiptText: {
    fontWeight: '700',
    color: colors.gray,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(2),

    padding: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  priceText: {
    color: colors.priceColor,
    fontWeight: 'bold',
  },
});
