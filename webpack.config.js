const path = require('path'); 
var rootDir = path.resolve(__dirname);
module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    devtool:'source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // For our normal typescript
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /(?:node_modules)/,
            },
        ]
    },
    plugins: [
        new DtsBundlePlugin()
    ],
    resolve: {
        modules: [
            'src',
            'node_modules'
        ],
        extensions: [
            '.js',
            '.ts'
        ]
    },
    devServer: {
        hot: true,
        compress: true,
        host: 'localhost',
        port: 8888
      }
};

function DtsBundlePlugin() {}
DtsBundlePlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function () {
        var dts = require('dts-bundle');

        dts.bundle({
            name: 'test',
            main: rootDir + '/dist/**/*.d.ts',
            out: rootDir + '/dist/main.d.ts',
            removeSource: false,
            outputAsModuleFolder: true,
            exclude:[] 
        });
    });
};