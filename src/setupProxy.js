const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://server-node-fot.herokuapp.com',
      changeOrigin: true,
      pathRewrite: {
          '^/api': '/api'
      }
    })
  );
};
