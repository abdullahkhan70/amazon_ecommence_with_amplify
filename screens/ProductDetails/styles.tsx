import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quantityMainView: {
    flexDirection: 'row',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(7),
    alignItems: 'center',
  },
  quantitySymbolText: {
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 7,
  },
  quantityText: {
    backgroundColor: colors.white,
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(6),
    fontSize: 17,
  },
  quantityBtn: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: colors.lightGray,
  },
  delieverText: {
    color: colors.homeSearchStatusBarDarkBlue,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(3),
    fontWeight: '600',
  },
  buttonStyle: {
    width: width - 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderColor: colors.gray,
    borderRadius: 7,
  },
  buttonText: {
    color: colors.black,
    fontSize: 16,
  },
  daysRemainText: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
    color: colors.red,
  },
  productTitle: {
    color: colors.black,
    width: width - 50,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  dateArrivesText: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(8),
    color: colors.black,
    // fontWeight: '',
  },
  dateFormat: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold',
  },
  productImportText: {
    fontSize: 15,
    // alignSelf: 'center',
  },
  productDetailsText: {
    fontSize: 15,
    color: colors.homeSearchStatusBarDarkBlue,
    // alignSelf: 'center',
    // marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  productDetailPriceWhole: {
    fontSize: 22,
    color: colors.black,
  },
  innerMainView: {
    alignItems: 'center',
  },
  productDetailDollarSign: {
    lineHeight: 14,
    fontSize: 12,
    color: colors.black,
  },
  importTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 30,
  },
  headerMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  productDetailMainView: {
    alignSelf: 'flex-start',
    width: width - 20,
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(3),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
  },
});
