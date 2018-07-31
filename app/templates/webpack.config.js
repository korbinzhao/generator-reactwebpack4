const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    demo: './demo/index.js',
    index: './src/index.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./demo/index.html",
      filename: "./index.html",
      chunks: ['demo']
    })
  ]
};