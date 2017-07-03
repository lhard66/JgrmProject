module.exports = {
  root: true,
  "env": {
    "browser": true,
    "node": true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  extends: 'standard',
  // add your custom rules here
  'rules': {
    'no-unused-vars': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'global-require': 0,
    'linebreak-style':0,
    'semicolon':0,
    'semi':0,
    'no-plusplus':0,
    'quote-props':0,
    'eqeqeq':0,
    'max-len':0,
    'prefer-rest-params':0,
    'prefer-template':0,
    'no-console':0,
    'no-underscore-dangle':0,
    'func-names':0,
    'prefer-const':0,
    'prefer-arrow-callback':0,
    'operator-assignment':0,
    'no-param-reassign':0,
    'space-before-function-paren': 0,
    'no-useless-computed-key': 0 ,
    'prefer-promise-reject-errors': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
