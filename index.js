/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {MainNavigation} from './components/navigation/MainNavigation';
import {SecondaryNavigation} from './components/navigation/SecondaryNavigation';

AppRegistry.registerComponent(appName, () => SecondaryNavigation);
