const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const buildPath = path.join(__dirname, '../');
const commonConfig = {
     cache: {
          type: 'filesystem',
     },

     experiments: {
          topLevelAwait: true,
     },

     optimization: {
          minimize: true,
     },
     devtool: 'source-map',
     module: {
          rules: [
               {
                    test: /\.tsx?$/,
                    use: ['ts-loader'],
                    exclude: /node_modules/,
               },
          ],
     },
     plugins: [new CleanWebpackPlugin()],
     resolve: {
          extensions: ['.ts', '.js'],
          plugins: [
               new TsconfigPathsPlugin({
                    configFile: path.resolve(__dirname, './src/server/tsconfig.json'),
               }),
          ],
     },
};

const server = (env) => ({
     ...commonConfig,
     entry: ['./src/server/server.ts'],
     target: 'node',
     node: {
          __dirname: true,
     },
     output: {
          path: path.resolve(buildPath, 'server'),
          filename: 'server.js',
     },
     optimization: {
          minimize: true,
     },
});

const client = (env) => ({
     ...commonConfig,
     entry: ['./src/client/client.ts'],
     target: 'web',
     output: {
          path: path.resolve(buildPath, 'client'),
          filename: 'client.js',
     },
     optimization: {
          minimize: false,
     },
});

module.exports = [server, client];
