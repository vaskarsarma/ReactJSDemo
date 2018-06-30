const webpack = require("webpack");
const path = require("path");
const DEST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: SRC_DIR + '/app/test.jsx',
    output: {
        path: DEST_DIR + "/app",
        filename: "bundle.js",
        publicPath: '/app/'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            include: SRC_DIR,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        }]
    }
}

// module.exports={
//     devtool: 'inline-source-map',
//     entry: [
//         'webpack-dev-server/client?http://127.0.0.1:8080/',
//         'webpack/hot/only-dev-server',
//         './src'
//     ],
//     output:{
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js',
//     },
//     resolve:{
//         modules:['node_modules','src'],
//         extensions:['.js','.jsx']
//     },
//     module:{
//         rules:[
//             {
//                 test:/\.jsx?$/,
//                 exclude: /node_modules/,
//                 loaders:['babel-loader?presets[]=react,presets[]=es2015']
//             }
//         ]
//     },
//     plugins:[
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoEmitOnErrorsPlugin()
//     ]

// }