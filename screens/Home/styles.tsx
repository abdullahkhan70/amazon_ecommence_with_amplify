import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  clipSaveUptoText: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 12,
  },
  conditionApplyText: {
    color: colors.gray,
    fontWeight: '700',
    fontSize: 12,
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  clipSaveUptoBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.lightGray,
    borderRadius: 6,
    width: '80%',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(1),
    padding: PixelRatio.getPixelSizeForLayoutSize(2),
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(2),
    paddingRight: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  productImage: {
    width: 110,
    height: 150,
    // flex: 1,
    alignSelf: 'flex-start',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  productWithCoupon: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.gray,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  productSaveUptoView: {
    backgroundColor: colors.lightGreen,
    width: 80,
    alignItems: 'center',
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(2),
    paddingRight: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  productSaveUpto: {
    alignItems: 'center',
  },
  productShipTo: {
    fontSize: 12,
    color: colors.gray,
    fontWeight: '700',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  producOldPrice: {
    fontWeight: '700',
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(3),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  productPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productNewPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.black,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  productRating: {
    fontSize: 14,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(2),
    fontWeight: 'bold',
    color: colors.gray,
  },
  stars: {
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(1),
  },
  starRatingView: {
    flexDirection: 'row',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
    alignItems: 'center',
  },
  productInnerView: {
    width: '70%',
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(2.5),
  },
  productHeaderText: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: width - 20,
    alignSelf: 'center',
  },
  productTitle: {
    fontSize: 15,
    color: colors.black,
    width: '90%',
    fontWeight: '700',
  },
  productMainView: {
    width: width - 10,
    alignItems: 'center',
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(2),
    flexDirection: 'row',
    margin: PixelRatio.getPixelSizeForLayoutSize(1.5),
    borderWidth: 1,
    borderColor: colors.lightGray,
    alignSelf: 'center',
  },
  searchBarContainer: {
    backgroundColor: colors.homeScreenStatusBar,
    height: 65,
    alignItems: 'center',
    flexDirection: 'row',
    padding: PixelRatio.getPixelSizeForLayoutSize(3),
    justifyContent: 'space-between',
  },
  locationMainContainer: {
    padding: PixelRatio.getPixelSizeForLayoutSize(3),
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationDelieverPlace: {
    color: colors.black,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(5),
    fontWeight: '600',
    fontSize: 15,
  },
  searchBarCameraIcon: {
    padding: PixelRatio.getPixelSizeForLayoutSize(2),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  searchBarInnerContainer: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  searchBarInputBar: {
    width: width / 1.8,
    backgroundColor: colors.white,
    height: 40,
  },
  searchBarSearchIcon: {
    padding: PixelRatio.getPixelSizeForLayoutSize(2),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
});
