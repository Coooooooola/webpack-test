const path = require('path')
const { DefinePlugin } = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV

const cwd = process.cwd()

const config = {
  mode: NODE_ENV,
  entry: './src/index.tsx',
  output: {
    filename: 'main.[hash:8].js',
    path: path.resolve(cwd, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /\bnode_modules\b/,
        use: [
          {
            loader: path.resolve(__dirname, 'js-checker.js'),
          },
          {
            loader: 'babel-loader',
          },
        ],
      }
    ],
  },
  resolve: {
    modules: [path.resolve(cwd, 'node_modules')],
    roots: [path.resolve('./src')],
    extensions: ['.js', '.tsx', '.ts'],
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'public/index.html',
    }),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
  ],
}

module.exports = config
