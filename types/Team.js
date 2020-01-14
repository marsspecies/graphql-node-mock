module.exports = function({GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean}) {
    return new GraphQLObjectType({
        name: 'Team',
        description: 'Team对象',
        fields: {
            id: {
                type: GraphQLInt
            },
            name: {
                type: GraphQLString
            },
            liveAccount: {
                type: new GraphQLObjectType({
                    name: 'liveAccount',
                    fields: {
                        id: {
                            type: GraphQLInt
                        },
                        enabled: {
                            type: GraphQLBoolean
                        }
                    }
                })
            },
            sandboxAccount: {
                type: new GraphQLObjectType({
                    name: 'sandboxAccount',
                    fields: {
                        id: {
                            type: GraphQLInt
                        },
                        enabled: {
                            type: GraphQLBoolean
                        }
                    }
                })
            }
            
        }
    });
}