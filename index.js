module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'order/order': [
      'at-variables',
      'dollar-variables',
      'custom-properties',
      'declarations',
      'rules',
    ],
    'order/properties-alphabetical-order': true,
  },
};
