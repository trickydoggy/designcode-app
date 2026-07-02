import { registerRootComponent } from 'expo';

// Disable Apollo Client deprecation warnings (e.g. canonizeResults)
global[Symbol.for("apollo.deprecations")] = true;

import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "Passing an object as the argument to 'navigate' is deprecated",
]);

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
