const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path  = require("path")

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: './index.ts',
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, "public/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
        // {
        //   from: path.resolve(__dirname, "public/assets"), 
        //   to: path.resolve(__dirname, "dist/assets"),
        // },
        // {
        //   from: path.resolve(__dirname, "public/fonts"), 
        //   to: path.resolve(__dirname, "dist/fonts"),
        // }
      ],
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [require('postcss-preset-env')]
              ]
            }
          }
        },
        "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3|wav|mpe?g|ogg)$/i,
        use: 'file-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
    ],
  },
}