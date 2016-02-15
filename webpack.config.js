module.exports = {
  entry: [
    './src/App.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/, 
        loader: "style!css!sass"
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader"
      },
      {
        test   : /\.woff/,
        loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
      }, 
      {
        test   : /\.ttf/,
        loader : 'file?prefix=font/'
      }, 
      {
        test   : /\.eot/,
        loader : 'file?prefix=font/'
      }, 
      {
        test   : /\.svg/,
        loader : 'file?prefix=font/'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};