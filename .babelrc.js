module.exports = {
  presets: [
    ['babel-preset-env', {
      shippedProposals: true,
      targets: {
        node: '6.10'
      }
    }],
    'babel-preset-stage-2'
  ]
};
