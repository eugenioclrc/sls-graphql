'use strict';

const server = require('graphql-server-lambda');
const schema = require('./schema');

module.exports.graphql = server.graphqlLambda({ schema });
module.exports.graphiql = server.graphiqlLambda({ endpointURL: '/graphql' });
