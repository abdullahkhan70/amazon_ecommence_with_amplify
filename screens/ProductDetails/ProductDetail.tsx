import {View, Text, TouchableOpacity, PixelRatio, Alert} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {labels, screens} from '../../utils/strings';
import product from '../../utils/lists/product';
import PriceText from '../../components/customs/CustomMethods/PriceText';
import {colors} from '../../utils/colors';
import ContentSub from './ContentSub';
import {GetDate} from '../../components/customs/CustomMethods/GetDate';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Buttons from './Buttons';
import Quantity from './Quantity';
import {useNavigation} from '@react-navigation/core';
const ProductDetail = () => {
  const navigation = useNavigation();
  const handleAddToCart = () => {
    navigation.navigate(screens.SHOPPINGCART as never);
  };
  const handleBuyNow = () => {
    Alert.alert('', 'But Now has been pressed.');
  };
  return (
    <View style={styles.productDetailMainView}>
      <PriceText price={product.price} />
      <ContentSub
        firstText={labels.importFeesText}
        otherSellers={labels.detailText}
        lastText={labels.availableText2}
        mainViewMarginTop={0}
        showSecondText={false}
        textColors={colors.gray}
      />
      <ContentSub
        firstText={labels.availableText1}
        otherSellers={labels.availableTextOtherSellers}
        lastText={labels.availableText2}
        mainViewMarginTop={3}
        showSecondText={true}
        textColors={colors.black}
      />
      <Text style={styles.dateArrivesText}>
        {labels.arrives} <Text style={styles.dateFormat}>{GetDate()}</Text>
      </Text>
      <View
        style={{
          marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Ionicons
          name={'location-outline'}
          size={PixelRatio.getPixelSizeForLayoutSize(7)}
        />
        <Text style={styles.delieverText}>
          {labels.delieverTo + labels.countryName}
        </Text>
      </View>
      <Text style={styles.daysRemainText}>{labels.daysRemain}</Text>
      <Quantity />
      <Buttons
        buttonText={labels.addToCart}
        buttonBackgroundColor={colors.addCartColor}
        marginTop={8}
        onPress={handleAddToCart}
      />
      <Buttons
        buttonText={labels.buyNow}
        buttonBackgroundColor={colors.buyNowColor}
        marginTop={4}
        onPress={handleBuyNow}
      />
    </View>
  );
};

export default ProductDetail;
