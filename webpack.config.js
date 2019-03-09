const webpack = require("webpack");
const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  target: "web",
  mode: IS_PRODUCTION ? "production" : "development",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  entry: "./src/client.tsx",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "[name]-[hash].bundle.js",
    chunkFilename: "[name].[chunkhash].js",
    sourceMapFilename: "[name].[chunkhash].js.map"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          compilerOptions: {
            target: "es5"
          }
        }
      }
    ]
  },
  devtool: IS_PRODUCTION && "#source-map",
  stats: "minimal",
  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true
        }
      }
    },
    concatenateModules: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          compress: true,
          output: {
            beautify: false
          }
        }
      })
    ]
  },
  plugins: [
    new CleanPlugin(["dist"], {
      verbose: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "local")
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: "./views/index.html"
    })
  ]
};
