import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import SearchBar from '../Home/SearchBar';
import {FocusAwareStatusBar} from '../../components/customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {colors} from '../../utils/colors';
import Header from './Header';
import ProductDetail from './ProductDetail';
import ImageCarousel from '../../components/customs/ImageCarousel';
import product from '../../utils/lists/product';

const index = () => {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={colors.homeScreenStatusBar}
        barStyle={'light-content'}
      />
      <SearchBar backButton={true} />
      <Header />
      <ScrollView>
        <ImageCarousel images={product.images} />
        <View style={styles.innerMainView}>
          <ProductDetail />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
