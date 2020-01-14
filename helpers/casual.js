const casual = require('casual-browserify');

casual.define('number', (min, max) => {
    return parseInt(min + Math.random() * (max - min));
});

module.exports = casual;