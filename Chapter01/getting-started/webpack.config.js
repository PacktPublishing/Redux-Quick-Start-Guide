const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/app/app.js",
  output: {
    path: path.resolve("dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  }
};
