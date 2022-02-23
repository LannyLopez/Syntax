import db from '../db/index.js';
import auth from '../utils/auth.js';
import bcrypt from 'bcrypt';
import User from '../db/User.js';
import { AuthenticationError } from 'apollo-server-express';


const resolvers = {
  Query: {
    projects: async (parent, args, context) => {
      // if (!context.user) throw new Error('Unauthenticated user');
      return await db.models.User.find();

    },

    users: async (parent, args, context) => {
      // if (!context.user) throw new Error('Unauthenticated user');
      return await db.models.User.find();
    }
  },

  Mutation: {

    newUser: async(parent, args) => {
      const user = await db.models.User.create(args);
      
      return user;
    },

    login: async (parent, { email, password }, context) => {
      const user = await db.models.User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect Credentials');
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      return user;
    },

    logout: (parent, args, context) => context.logout(),

    createProject: async(parent, args, context) => {
      if (context.user) {
        const project = await db.models.Project.create({ ...args, username: context.user.username });
        return project;
      };
    }

  }
};

export default resolvers;
