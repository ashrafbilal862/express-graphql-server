const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const userType = require("../../schema/typeDefs/userType");
const postType = require("../../schema/typeDefs/postType");
const Post = require("../../models/postModel");

exports.addPost = {
  type: postType,
  args: {
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    author: { type: GraphQLString },
  },
  async resolve(parent, args) {
    return await Post.create(args);
  },
};

exports.getAllPosts = {
  type: new GraphQLList(postType),
  async resolve(parent, args) {
    return await Post.find({});
  },
};

exports.getPostById = {
  type: postType,
  args: {
    id: { type: GraphQLString },
  },
  async resolve(parent, args) {
    return await Post.findById(args.id);
  },
};

exports.editPost = {
  type: postType,
  args: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  },
  async resolve(parent, args) {
    return await Post.findByIdAndUpdate(args.id, args, { new: true });
  },
};

exports.deletePost = {
  type: postType,
  args: {
    id: { type: GraphQLString },
  },
  async resolve(parent, args) {
    return await Post.findByIdAndDelete(args.id);
  },
};
