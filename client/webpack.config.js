const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'game.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'GameModule',
      type: 'umd', // Universal Module Definition
    },
    globalObject: 'this',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            'node_modules/@oof.gg/sdk/workers/worker.js'
          ), // Path to the file in node_modules
          to: path.resolve(__dirname, 'dist/workers/worker.js'), // Desired output location
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {},
}