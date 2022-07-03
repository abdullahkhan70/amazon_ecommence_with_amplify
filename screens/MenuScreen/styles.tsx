import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.homeScreenStatusBar,
    flex: 1,
    padding: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  menuBtn: {
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  menuText: {
    fontWeight: 'bold',
    color: colors.white,
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(8),
    fontSize: 16,
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoImg: {
    width: 110,
    height: 110,
  },
});
