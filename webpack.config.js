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
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
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