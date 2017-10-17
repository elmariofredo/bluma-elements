exports.config = {
  bundles: [
    { components: ['bu-button'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
