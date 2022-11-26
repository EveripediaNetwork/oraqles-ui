module.exports = {
  extends: './configs/eslint-next.js',
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
  },
}
