import {View, Text, TouchableOpacity, PixelRatio, Alert} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {labels, screens} from '../../utils/strings';
import PriceText from '../../components/customs/CustomMethods/PriceText';
import {colors} from '../../utils/colors';
import ContentSub from './ContentSub';
import {GetDate} from '../../components/customs/CustomMethods/GetDate';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Buttons from './Buttons';
import Quantity from './Quantity';
import {useNavigation} from '@react-navigation/core';
import {ProductDetails} from '../../utils/hooks/types/productDetailTypes';
import {Auth, DataStore} from 'aws-amplify';
import {CartProduct} from '../../src/models';
import {useAppSelector} from '../../utils/hooks/reduxHooks';
const ProductDetail: FC<ProductDetails> = ({products = {}}) => {
  const navigation = useNavigation();
  const selQuantity = useAppSelector(
    state => state.productDetailsSlice.quantity,
  );
  const handleAddToCart = async () => {
    const userId = await Auth.currentAuthenticatedUser();
    console.log(`Current user ID: ${userId.attributes.sub}`);
    if (!products || !userId) {
      return;
    }
    const newCartToItem = new CartProduct({
      userSub: userId.attributes.sub,
      prodictId: products.id,
      quantity: selQuantity,
    });
    const result = await DataStore.save(newCartToItem);
    console.log(result);
    // navigation.navigate(screens.SHOPPINGCART as never);
  };
  const handleBuyNow = () => {
    Alert.alert('', 'But Now has been pressed.');
  };
  return (
    <View style={styles.productDetailMainView}>
      <PriceText price={products?.price?.toFixed(2)} />
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
