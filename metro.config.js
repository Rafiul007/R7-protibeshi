const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

// Step 1: Merge default config with your custom config
const mergedConfig = mergeConfig(getDefaultConfig(__dirname), config);

// Step 2: Wrap with Reanimated's config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
