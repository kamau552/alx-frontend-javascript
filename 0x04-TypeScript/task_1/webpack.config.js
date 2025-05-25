module.exports = {
  mode: 'development',  // or 'production' depending on what you want
  entry: './js/main.ts',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
