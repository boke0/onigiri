module.exports = [
  {
    mode: 'development',
    entry: './src/index.ts',
    output: {
      path: `${__dirname}/dist`,
      filename: './onigiri.js',
      library: 'Onigiri',
      libraryTarget: 'umd',
      globalObject: 'this'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  },
  {
    mode: 'development',
    entry: './examples/src/main.js',
    output: {
      path: `${__dirname}/examples`,
      filename: './main.js',
    },
    resolve: {
      extensions: ['.js']
    },
    devServer: {
      contentBase: `${__dirname}/examples`,
      compress: true,
      port: 9000
    }
  }
];

