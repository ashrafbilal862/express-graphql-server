const graphql = require("graphql");
const User = require("../../models/userModel");

// These should be resolvers instead of sche a it is like controllers in the Restful API world

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const userType = require("../../schema/typeDefs/userType");

exports.addUser = {
  type: userType,
  args: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, args) {
    return await User.create({ ...args });
  },
};

exports.getAllUsers = {
  type: new GraphQLList(userType),
  async resolve(parent, args) {
    return await User.find({});
  },
};

exports.getUserByName = {
  type: userType,
  args: {
    firstName: { type: GraphQLString },
  },
  async resolve(parent, args) {
    return await User.findOne({ firstName: args.firstName });
  },
};

exports.loginUser = {
  type: userType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const user = await User.findOne({ email: args.email });
    if (user && (await user.matchPassword(args.password))) {
      return user;
    } else {
      throw new Error("Invalid email or password");
    }
  },
};

exports.editUser = {
  type: userType,
  args: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, args) {
    return await User.findByIdAndUpdate(args.id, args, { new: true });
  },
};

exports.deleteUser = {
  type: userType,
  args: {
    id: { type: GraphQLString },
  },
  async resolve(parent, args) {
    return await User.findByIdAndDelete(args.id);
  },
};
