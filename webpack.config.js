const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['babel-polyfill', "./src/index.js"],
  output: {    
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract( { 
            fallback: 'style-loader',
            use: [{ 
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }]
        })
      },     
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: '/assests/users',     
              publicPath: '/dist/assests/users'         
            }
          }
        ]
      }
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: "index.html", //target html
      template: "./src/index.html" //source html
    }),
    new ExtractTextPlugin({ filename: "css/style.css" })
  ]
};
