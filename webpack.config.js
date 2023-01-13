const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');



module.exports = {

    // bundling mode
    mode: 'production',

    context: __dirname,

    // entry files
    entry: './src/scripts/main.ts',

    // output bundles (location)
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: ['.ts', '.js'],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin(), // run TSC on a separate thread
    ],

    // set watch mode to `true`
    watch: true
};