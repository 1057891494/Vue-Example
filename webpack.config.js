var webpack = require('webpack');
module.exports = {
    entry: './src/entry.js',
    output: {
        path: __dirname,
        filename: 'build/main.js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                babel: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        })
    ]
};
