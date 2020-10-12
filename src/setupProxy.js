const { createProxyMiddleware } = require('http-proxy-middleware');
const serverless = require('serverless-http');

const app = (app) => {
  app.use(
    '/.netlify',
    createProxyMiddleware({
      target: 'https://admiring-heisenberg-b7fd45.netlify.app',
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
          '^/.netlify': '/.netlify'
      }
    })
  );
  module.exports.handler = serverless(app);
};
module.exports = app;
module.exports.handler = serverless(app);