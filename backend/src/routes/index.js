const produts = require("./products/products-Routes");

const prefixApi = "/api";

function routerApi(app) {
  app.use(`${prefixApi}/all-product`, produts);
}

module.exports = routerApi;
