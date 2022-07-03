import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {FocusAwareStatusBar} from '../../components/customs/FocusAwareStatusBar/FocusAwareStatusBar';
import {styles} from './styles';
import Logo from './Logo';
import Menu from './Menu';
import {labels, screens} from '../../utils/strings';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const MenuScreen = () => {
  const navigation = useNavigation();
  const navigateTo = (screenName: string) => {
    if (screenName.length == 0) {
      Auth.signOut();
    } else {
      navigation.navigate(screenName as never);
    }
  };
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={colors.homeScreenStatusBar}
        barStyle={'light-content'}
      />
      <Logo />
      <Menu
        color={colors.white}
        size={8}
        iconName={'home'}
        text={labels.homeScreenLabel}
        onPress={() => navigateTo(screens.HOMESTACK)}
      />
      <Menu
        color={colors.white}
        size={8}
        iconName={'users'}
        text={labels.userLable}
        onPress={() => navigateTo(screens.USERINFO)}
        marginTopStyle={5}
      />
      <Menu
        color={colors.white}
        size={8}
        iconName={'shopping-bag'}
        text={labels.shoppingCartLabel}
        onPress={() => navigateTo(screens.SHOPPINGCART)}
        marginTopStyle={5}
      />
      <Menu
        color={colors.white}
        size={8}
        iconName={'user-slash'}
        text={labels.signOutLable}
        onPress={() => navigateTo('')}
        marginTopStyle={5}
      />
    </View>
  );
};

export default MenuScreen;
