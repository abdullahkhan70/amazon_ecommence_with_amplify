import {View, Text, SafeAreaView, Alert, ScrollView} from 'react-native';
import React from 'react';
import {FocusAwareStatusBar} from '../../components/customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {colors} from '../../utils/colors';
import {styles} from './styles';
import SearchBar from '../Home/SearchBar';
import {labels, screens} from '../../utils/strings';
import Buttons from '../ProductDetails/Buttons';
import AddGifts from './AddGifts';
import Products from '../Home/Products';

const ShoppingCart = () => {
  const handleProceedToCheckout = () => {
    Alert.alert('', 'The proceed to checkout has been clicked!');
  };
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={colors.homeScreenStatusBar}
        barStyle={'light-content'}
      />
      <SearchBar />
      <View style={styles.subtotalView}>
        <Text style={styles.subtotalText}>
          {labels.subTotal}{' '}
          <Text style={styles.priceText}>
            {labels.dollarSignWithoutSpace + labels.price}
          </Text>
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Buttons
              buttonText={labels.proceedCheckout}
              buttonBackgroundColor={colors.proceedCheckoutColor}
              marginTop={2}
              onPress={handleProceedToCheckout}
            />
            <AddGifts />
            <Products shoppingCartScreen={true} screenName={screens.USERINFO} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCart;
