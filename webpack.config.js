const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = function (env, argv) {
  /** @type {import('webpack').Configuration['mode']} */
  const mode = env.NODE_ENV === 'production' ? 'production' : 'development'
  const isDev = mode !== 'production'

  /** @type { import('webpack').RuleSetRule } */
  const typescriptLoader = {
    test: /\.tsx?$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'swc-loader',
    },
  }

  const resolvePlugins = [new TsconfigPathsPlugin()]
  const resolve = {
    plugins: resolvePlugins,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }

  /** @type { import('webpack').Configuration} */
  const appConfig = {
    name: 'slack-eva',
    mode,
    entry: './src',
    module: {
      rules: [typescriptLoader],
    },
    resolve,
    target: 'node',
    output: {
      filename: isDev ? '[name].js' : '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    externalsPresets: { node: true },
    externals: [nodeExternals()],
  }

  return [appConfig]
}
