const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql')

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query of the schema',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => 'world!'
    }
  })
})

module.exports = new GraphQLSchema({ query })
