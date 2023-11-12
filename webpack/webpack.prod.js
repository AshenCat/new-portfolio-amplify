const webpack = require('webpack')

module.exports = (env) => {

    return {
        mode: 'production',
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.name': JSON.stringify('Klifford')
            }),
            new webpack.DefinePlugin({
                'process.env.EMAIL_AWS_KEY': env.EMAIL_AWS_KEY
            })
        ]
    }
}