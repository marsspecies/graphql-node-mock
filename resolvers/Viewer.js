const casual = require('../helpers/casual');


module.exports = function(root, args) {
    return {
        id: casual._building_number(),
        name: casual.name,
        email: casual.email,
        teams: {
            id: casual.id,
            name: casual.name,
            liveAccount: {
                id: casual.id,
                enabled: casual.boolean
            },
            sandboxAccount: {
                id: casual.id,
                enabled: casual.boolean
            }
        }
    }
}