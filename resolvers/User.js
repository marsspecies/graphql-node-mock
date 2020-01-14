const casual = require('../helpers/casual');


module.exports = function(root, args) {
    return {
        id: args.id,
        name: casual.name,
        age: casual.number(0, 70)
    }
}