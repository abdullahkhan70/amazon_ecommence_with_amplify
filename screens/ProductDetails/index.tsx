import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import SearchBar from '../Home/SearchBar';
import {FocusAwareStatusBar} from '../../components/customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {colors} from '../../utils/colors';
import Header from './Header';
import ProductDetail from './ProductDetail';
import ImageCarousel from '../../components/customs/ImageCarousel';
import product from '../../utils/lists/product';
import {useAppDispatch, useAppSelector} from '../../utils/hooks/reduxHooks';
import {DataStore} from 'aws-amplify';
import {Product} from '../../src/models';
import {setProductDetails} from '../../utils/redux/productDetailsSlice';
const index = () => {
  const dispatch = useAppDispatch();
  const selProductId = useAppSelector(
    state => state?.productDetailsSlice?.productId,
  );
  const selProductDetails = useAppSelector(
    state => state?.productDetailsSlice.productDetail,
  );

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = async () => {
    const result = await DataStore.query(Product, selProductId);
    dispatch(setProductDetails(result));
  };
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={colors.homeScreenStatusBar}
        barStyle={'light-content'}
      />
      <SearchBar backButton={true} />
      <Header />
      <ScrollView>
        {console.log(
          `The Products Detail: ${JSON.stringify(selProductDetails)}`,
        )}
        <ImageCarousel images={selProductDetails?.images} />
        <View style={styles.innerMainView}>
          <ProductDetail products={selProductDetails} />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
