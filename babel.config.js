// babel.config.js
const presets = [
  [
    '@babel/preset-env',
    {
      // Pass a config object to the preset
      debug: false, // Output the targets/plugins used when compiling
      // configure how @babel/preset-env handles pollyfills from core-js
      useBuiltIns: 'usage',
      corejs: 3,
    },
  ],
  '@babel/preset-react',
];

const plugins = [
  '@babel/plugin-proposal-class-properties',
  'babel-plugin-syntax-dynamic-import',
  [
    'babel-plugin-import',
    {
      libraryName: '@material-ui/core',
      // Use "'libraryDirectory': ''," if your bundler does not support ES modules
      libraryDirectory: 'esm',
      camel2DashComponentName: false,
    },
    'core',
  ],
  [
    'babel-plugin-import',
    {
      libraryName: '@material-ui/icons',
      // Use "'libraryDirectory': ''," if your bundler does not support ES modules
      libraryDirectory: 'esm',
      camel2DashComponentName: false,
    },
    'icons',
  ],
];
module.exports = { presets, plugins };
