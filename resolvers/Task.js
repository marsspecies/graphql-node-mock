const casual = require('../helpers/casual');


module.exports = function(root, args) {
    let len = 3;
    let result = [];
    for (let i=0; i<len;i++) {
        result.push({
            id: args.id,
            content: casual.string,
            description: casual.text
        })
    }
    return result
}