exports.config = {
  bundles: [
    { components: ['bu-box'] },
    { components: ['bu-button'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
