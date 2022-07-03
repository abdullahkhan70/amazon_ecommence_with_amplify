import {View, FlatList, Image, useWindowDimensions} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles.';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks/reduxHooks';
import {colors} from '../../../utils/colors';
import {setSelectedImageCarouselIndex} from '../../../utils/redux/productDetailsSlice';
interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: FC<ImageCarouselProps> = ({images}) => {
  const windowWidth = useWindowDimensions().width;
  const dispatch = useAppDispatch();
  const selSelectedImageCarouselIndex = useAppSelector(
    state => state.productDetailsSlice.selectedImageCarouselIndex,
  );

  const onViewRef = React.useRef((viewableItems: any) => {
    console.log(viewableItems.changed[0]);
    // Use viewable items in state or as intended

    if (viewableItems.changed.length > 0) {
      dispatch(setSelectedImageCarouselIndex(viewableItems?.changed[0]?.index));
    }
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});
  const renderItems = ({item, index}: any) => (
    <Image
      source={{uri: item}}
      style={{
        ...styles.image,
        width: windowWidth - 50,
      }}
      resizeMode="center"
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 30}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        viewabilityConfig={viewConfigRef?.current}
        pagingEnabled
        onViewableItemsChanged={onViewRef?.current}
      />
      <View style={styles.dot}>
        {images?.map((items, index) => (
          <View
            style={{
              ...styles.dots,
              backgroundColor:
                selSelectedImageCarouselIndex == index
                  ? colors.white
                  : colors.lightGray,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
