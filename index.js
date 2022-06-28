module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'prettier',
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-tabs': 0,
    'indent': ['error', 'tab'],
    'semi': [2, 'always'],
    'curly': ['error', 'multi-line'],
    'camelcase': 0,
    'react/no-danger': 0,
    'no-nested-ternary': 0,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'no-new': 0,
    'no-sync': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-empty': ['error', {
      allowEmptyCatch: true
    }],
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'space-before-function-paren': 0,
    'array-callback-return': 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],
    'func-names': 0,
    'arrow-body-style': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'no-restricted-globals': 0,
    'no-restricted-syntax': 0,
    'no-mixed-operators': [
      'error', {
        groups: [['&', '|', '^', '~', '<<', '>>', '>>>'], ['&&', '||']],
        allowSamePrecedence: true,
      },
    ],
    'max-len': [
      2,
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'function-paren-newline': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-relative-packages': 0,
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: [
          '/src',
          '/test',
        ],
        peerDependencies: 0,
      },
    ],
    'prefer-const': ['error', {
      destructuring: 'all',
    }],
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }, {
        enforceForRenamedProperties: false,
      }],
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
