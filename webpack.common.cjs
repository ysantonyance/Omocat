const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
    register: './js/entities/register.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/[name].js',
  },
};
