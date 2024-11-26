const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Detecta archivos CSS
        use: ['style-loader', 'css-loader'], // Procesa e inyecta CSS
      },
    ],
  },
};
