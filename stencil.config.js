exports.config = {
  namespace: 'Bulma',
  // sassConfig: {
  //   includePaths: ['node_modules'],
  // },
  // generateDistribution: true,
  // generateWWW: false,
  bundles: [
    { components: ['bu-box'] },
    { components: ['bu-button'] },
    { components: ['md-button'] },
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
