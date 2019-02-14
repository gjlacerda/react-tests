module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  devServer: {
    publicPath: '/',
    contentBase: './dist',
  },
  resolve: {
    modules: [
      'src',
      'node_modules'
    ]
  }
}