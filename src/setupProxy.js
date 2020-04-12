//proxy setup to serve api
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  console.log("middleware called");
  app.use(
    "/api",
    proxy({
      target: "http://localhost:8080",
      // pathRewrite: { "^/api": "" },
      changeOrigin: true,
    })
  );
};
