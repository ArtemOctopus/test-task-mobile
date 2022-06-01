/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { name as appName } from './app.json';
import Application from './src/index'

AppRegistry.registerComponent(appName, () =>
  gestureHandlerRootHOC(Application),
);
