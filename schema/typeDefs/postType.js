const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const postType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    author: { type: GraphQLString },
  }),
});

module.exports = postType;
