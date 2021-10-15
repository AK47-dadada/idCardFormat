module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'rules': {
    'linebreak-style': 'off',
    'new-cap': [
      'error',
      {
        'newIsCap': false,
        'capIsNew': false,
      },
    ],
    'max-len': ['error',
      {'code': 160, 'tabWidth': 2,
      },
    ],
    'no-invalid-this': ['error',
      {'capIsConstructor': true,
      },
    ],
  },
};
