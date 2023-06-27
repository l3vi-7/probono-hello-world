const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  // source code should be accessible in browser devtools
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      // add rule for loading css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // add rule for loading images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },

    compress: true,
    port: 9000,
  },
};
