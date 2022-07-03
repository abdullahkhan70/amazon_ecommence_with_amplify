import {
  View,
  Text,
  FlatList,
  Image,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
// import products from '../../utils/lists/products';
import {styles} from './styles';
import {labels, screens} from '../../utils/strings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../utils/colors';
import {numberWithCommas} from '../../components/customs/CustomMethods/CommaSeparator';
import {useNavigation} from '@react-navigation/native';
import {
  productRenderItemsProps,
  productsTypes,
} from '../../utils/hooks/types/productsTypes';
import ShoppingCartOptions from '../../components/customs/ShoppingCart/ShoppingCartOptions';
import {useAppDispatch} from '../../utils/hooks/reduxHooks';
import {setproductId} from '../../utils/redux/productDetailsSlice';

const Products: FC<productsTypes> = ({
  shoppingCartScreen = false,
  screenName,
  products = [],
}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const handleProductDetails = (id: string) => {
    dispatch(setproductId(String(id)));
    navigation.navigate(screenName as never);
  };
  const renderItems = ({item, index}: productRenderItemsProps) => (
    <TouchableOpacity
      activeOpacity={0.2}
      onPress={() => handleProductDetails(item?.id)}>
      <View
        style={{
          borderWidth: shoppingCartScreen ? 1 : 0,
          borderColor: colors.lightGray,
          marginTop: shoppingCartScreen
            ? PixelRatio.getPixelSizeForLayoutSize(2)
            : 0,
          marginBottom: shoppingCartScreen
            ? PixelRatio.getPixelSizeForLayoutSize(2)
            : 0,
        }}>
        <View
          style={{
            ...styles.productMainView,
            borderWidth: shoppingCartScreen ? 0 : 1,
          }}>
          <Image
            source={{uri: item?.image}}
            style={styles.productImage}
            resizeMode="stretch"
          />
          <View style={styles.productInnerView}>
            <Text style={styles.productTitle} numberOfLines={2}>
              {item?.title}
            </Text>
            <View style={styles.starRatingView}>
              {Array.from(Array(5)).map((element, i) => (
                <FontAwesome
                  name={i < Math.floor(item?.avgRating) ? 'star' : 'star-o'}
                  size={18}
                  color={colors.orangeStarColor}
                />
              ))}
              <Text style={styles.productRating}>
                {numberWithCommas(item?.ratings)}
              </Text>
            </View>
            <View style={styles.productPriceView}>
              <Text style={styles.productNewPrice}>
                {labels.from + item?.price.toFixed(2)}
              </Text>
              <Text style={styles.producOldPrice}>
                {item?.oldPrice.toFixed(2)}
              </Text>
            </View>
            {item?.saveUpto > 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: PixelRatio.getPixelSizeForLayoutSize(1),
                  alignItems: 'center',
                }}>
                <View style={styles.productSaveUptoView}>
                  <Text style={styles.productSaveUpto}>
                    {labels.saveText + item?.saveUpto + '%'}
                  </Text>
                </View>
                <Text style={styles.productWithCoupon}>
                  {labels.withCoupon}
                </Text>
              </View>
            ) : (
              <View />
            )}
            {item?.ship ? (
              <View>
                <Text style={styles.productShipTo}>{labels.shipTo}</Text>
                <TouchableOpacity style={styles.clipSaveUptoBtn}>
                  <Text style={styles.clipSaveUptoText}>
                    {labels.clipSave +
                      labels.dollarSign +
                      ((item?.saveUpto * item?.price) / 100).toFixed(2)}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.conditionApplyText}>
                  {labels.conditionApplyText}
                </Text>
              </View>
            ) : (
              <View />
            )}
          </View>
        </View>
        {shoppingCartScreen ? <ShoppingCartOptions /> : <View />}
      </View>
    </TouchableOpacity>
  );
  const renderHeader = () => (
    <Text style={styles.productHeaderText}>{labels.result}</Text>
  );
  return (
    <>
      <FlatList
        data={products}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </>
  );
};

export default Products;
