const casual = require('../helpers/casual');


module.exports = function(root, args) {
    return {
        id: casual.building_number,
        name: casual.name,
        liveAccount: {
            id: casual.building_number,
            enabled: casual.boolean
        },
        sandboxAccount: {
            id: casual.building_number,
            enabled: casual.boolean
        }
    }
}