module.exports = {
  runtimeCompiler: true,
  publicPath: '/portfolio/',
  outputDir: 'docs',
  css : {
    loaderOptions: {
      sass: {
        "implementation": require('sass')
      }
    }
  }
};
