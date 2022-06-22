import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(4),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(2),
    flexDirection: 'row',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  deleteBtnText: {
    color: colors.black,
    fontSize: 13,
    fontWeight: '700',
  },
  deleteBtn: {
    padding: PixelRatio.getPixelSizeForLayoutSize(4),
    backgroundColor: colors.white,
    borderRadius: 7,
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  deleteIcon: {
    backgroundColor: colors.lightGray,
    padding: PixelRatio.getPixelSizeForLayoutSize(1.5),
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  plusIcon: {
    backgroundColor: colors.lightGray,
    padding: PixelRatio.getPixelSizeForLayoutSize(1.5),
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  totalQuantityText: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold',
  },
  totalQunatityView: {
    backgroundColor: colors.white,
    alignItems: 'center',
    width: 45,
    height: 40,
    justifyContent: 'center',
  },
});
