module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'google', 'prettier', 'next'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'require-jsdoc': 0,
    // React
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'no-use-before-define': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }], //
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['warn']
  }
}
