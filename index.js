module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // additional scss at-rules:
          'content', 'each', 'else', 'error', 'extend', 'for', 'function', 'if', 'include', 'mixin', 'return',
        ],
      },
    ],
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
