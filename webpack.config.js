module.exports = {
    devServer: {
        setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }


            devServer.app.get('/some-custom-route', (req, res) => {
                res.json({message: 'Custom route response'});
            });


            middlewares.push((req, res, next) => {
                console.log('Middleware after setup');
                next();
            });

            return middlewares;
        },
    },
};
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
