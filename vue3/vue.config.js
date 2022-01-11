const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:9002/",
  devServer: {
    port: 9002,
  },
});
