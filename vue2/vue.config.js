const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:9001/",
  devServer: {
    port: 9001,
  },
});
