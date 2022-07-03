/**
 * @format
 */

import {Amplify} from 'aws-amplify';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {FirstNavigation} from './components/navigation/FirstNavigation';
import {MainNavigation} from './components/navigation/MainNavigation';
import SecondaryNavigation from './components/navigation/SecondaryNavigation';

AppRegistry.registerComponent(appName, () => SecondaryNavigation);
