exports.config = {
  namespace: 'Bulma',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['bu-box'] },
    { components: ['bu-button'] },
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
