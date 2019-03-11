const tailwind = require('tailwindcss');

module.exports = {
    plugins: [
        tailwind('./tailwind.js'),
        require('autoprefixer'),
        require('cssnano')({ preset: 'default' }),
    ],
};