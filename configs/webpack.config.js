const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const mode = process.env.NODE_ENV

const config = {
  mode,
  entry: './src/index.tsx',
  output: {
    filename: 'main.[hash:8].js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      }
    ],
  },
  resolve: {
    roots: [path.resolve('./src')],
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'public/index.html',
    }),
    new CleanWebpackPlugin({}),
  ],
}

module.exports = config
