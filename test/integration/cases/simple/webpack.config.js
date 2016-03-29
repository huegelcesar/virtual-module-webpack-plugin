'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VirtualModulePlugin = require('../../../../');

module.exports = function webpackConfig() {
  return {
    entry: './index',
    plugins: [
      new VirtualModulePlugin({
        moduleName: './a.txt',
        contents: 'a',
      }),
      new ExtractTextPlugin('file.txt'),
    ],
  };
};
