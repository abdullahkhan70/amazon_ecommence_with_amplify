import {Dimensions, PixelRatio, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
    flex: 1,
  },
  image: {
    height: 240,
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(4),
  },

  dots: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#c9c9c9',
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  dot: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
});
