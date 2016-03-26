module.exports = {
  entry: `${__dirname}/src/App.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'file?name=images/[name].[ext]' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
