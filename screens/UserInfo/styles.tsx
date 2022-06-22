import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.userInfoBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: PixelRatio.getPixelSizeForLayoutSize(1),
  },
  deliveryFirstText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  deliverySecondText: {
    color: colors.gray,
    fontWeight: '700',
    fontSize: 13,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(1),
  },
  deliveryContainer: {
    padding: PixelRatio.getPixelSizeForLayoutSize(5),
    backgroundColor: colors.white,
    borderRadius: 7,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  markAsDefaultContainer: {
    flexDirection: 'row',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 13,
  },
  markAsDefaultTitle: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '600',
  },
  stateInput: {
    borderWidth: 2,
    borderColor: colors.lightGray,
    width: width / 2 - 15,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
    borderRadius: 7,
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(4),
    backgroundColor: colors.white,
  },
  stateTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  stateZipCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  inputFieldView: {
    width: width - 20,
    alignSelf: 'center',
  },
  inputTextAreaDeleteIcon: {
    alignSelf: 'center',
    borderColor: colors.lightGray,
    borderWidth: 2,
    borderLeftWidth: 0,
    width: width / 2 - 140,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
    height: 53,
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(4),
    backgroundColor: colors.white,
  },
  inputFieldArea: {
    borderWidth: 2,
    borderRightWidth: 0,
    borderColor: colors.lightGray,
    width: width - 60,
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(7),
    backgroundColor: colors.white,
  },
  inputFieldTitle: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 15,
  },
  toolBarContainer: {
    backgroundColor: colors.homeScreenStatusBar,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    padding: PixelRatio.getPixelSizeForLayoutSize(3),
    justifyContent: 'space-between',
  },
  countryPickerText: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 14.5,
  },
  enterUserAddress: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 18,
  },
  countryPickerBtn: {
    borderRadius: 7,
    borderWidth: 0.5,
    bordderColor: colors.countryPickerBtnColor,
    width: width - 20,
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    height: 53,
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(1.75),
  },

  countryPickerBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(4),
    alignItems: 'center',
    padding: PixelRatio.getPixelSizeForLayoutSize(4),
  },
});
