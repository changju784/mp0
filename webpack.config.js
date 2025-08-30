const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv && argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'inline-source-map',
    performance: { hints: false },
    devServer: {
      static: { directory: path.resolve(__dirname, 'build') },
      historyApiFallback: true,
      port: 8080,
      open: true,
    },
    entry: './src/index.js',
    module: {
      rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.(png|svg|jpe?g|gif|woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',                       // replaces file-loader
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'src/assets'), to: 'assets' },
        ],
      }),
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      // publicPath: isProd ? '/mp0/' : '/',
      assetModuleFilename: 'assets/[name][contenthash][ext][query]',
    },
  };
};
