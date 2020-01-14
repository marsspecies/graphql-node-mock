const casual = require('../helpers/casual');


module.exports = function(root, args) {
    return {
        token: casual.password
    }
}