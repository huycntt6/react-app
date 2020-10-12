const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/.netlify',
    createProxyMiddleware({
      target: 'https://admiring-heisenberg-b7fd45.netlify.app',
      changeOrigin: true,
      //logLevel: 'debug',
      pathRewrite: {
          '^/.netlify': '/.netlify'
      }
    })
  );
};