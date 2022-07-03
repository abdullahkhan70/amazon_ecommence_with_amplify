import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {FocusAwareStatusBar} from '../../components/customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {colors} from '../../utils/colors';
import {styles} from './styles';
import SearchBar from './SearchBar';
import Location from './Location';
import Products from './Products';
import {screens} from '../../utils/strings';
import {useAppDispatch, useAppSelector} from '../../utils/hooks/reduxHooks';
import {DataStore} from '@aws-amplify/datastore';
import {Product} from '../../src/models';
import {setProducts} from '../../utils/redux/productDetailsSlice';
const index = () => {
  const dispatch = useAppDispatch();
  const selUser = useAppSelector(state => state?.userSlice?.users);
  const selProducts = useAppSelector(
    state => state.productDetailsSlice.products,
  );

  useEffect(() => {
    console.log('User data: ' + JSON.stringify(selUser));
    productsFetch();
  }, [selUser]);

  const productsFetch = async () => {
    const result = await DataStore.query(Product);
    dispatch(setProducts(result));
    console.log('Datastore Data is: ' + JSON.stringify(result));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={colors.homeScreenStatusBar}
        barStyle={'light-content'}
      />
      <SearchBar backButton={true} />
      <Location />

      <Products screenName={screens.PRODUCTDETAILS} products={selProducts} />
    </SafeAreaView>
  );
};

export default index;
