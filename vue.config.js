module.exports = {
  publicPath: '/reg-form/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/main.scss";
        `
      }
    }
  }
};