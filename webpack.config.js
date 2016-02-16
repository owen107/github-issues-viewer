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
        loader: 'style!css'
      },
      { 
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  devServer: {
    contentBase: './'
  }
};