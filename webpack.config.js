const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "/public/dist"),
    assetModuleFilename: "src/public/[name][ext]",
    publicPath: "/public/dist",
    filename: "main.js",
  },
  mode: "production",
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      querystring: require.resolve("querystring-es3"),
      http: require.resolve("stream-http"),
      crypto: require.resolve("crypto-browserify"),
      zlib: require.resolve("browserify-zlib"),
      vm: require.resolve("vm-browserify"),
      assert: require.resolve("assert/"),
      async_hooks: false,
      fs: false,
      net: false,
    },
    modules: [
      "node_modules", // The default
      "src",
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
