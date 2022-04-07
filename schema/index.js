const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const UserType = require("./typeDefs/userType");
const userData = require("../MOCK_DATA.json");
const {
  addUser,
  getAllUsers,
  getUserByName,
  loginUser,
  editUser,
  deleteUser,
} = require("../resolvers/user/userResolver");
const {
  addPost,
  getAllPosts,
  getPostById,
  editPost,
  deletePost,
} = require("../resolvers/post/postResolver");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: getAllUsers,
    getUserByName: getUserByName,
    loginUser: loginUser,
    getAllPosts: getAllPosts,
    getPostById: getPostById,
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: addUser,
    updateUser: editUser,
    deleteUser: deleteUser,
    createPost: addPost,
    updatePost: editPost,
    deletePost: deletePost,
  },
});

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

module.exports = schema;
