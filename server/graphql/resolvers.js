import db from '../db/index.js';
import auth from '../utils/auth.js';


const resolvers = {
  Query: {
    projects: async (parent, args, context) => {
      if (!context.user) throw new Error('Unauthenticated user');
      return await db.models.User.find();

    },

    users: async (parent, args, context) => {
      if (!context.user) throw new Error('Unauthenticated user');
      return await db.models.User.find();
    }
  },

  Mutation: {

    newUser: async(parent, args) => {
      const user = await db.models.User.create(args);
      
      return user;
    },

    login: async(parent, args) => {
      try {
        const user = await db.models.User.findOne({ email: args.email, password: args.password });

        if (!user) throw new Error('Incorrect Email or Password');

        const token = auth.signToken({ _id: user._id, email: user.email });
        console.log(token);

        return { token, user };
      } catch (error) {
        console.log(error);
      }
    },

    createProject: async(parent, args, context) => {
      if (context.user) {
        const project = await db.models.Project.create({ ...args, username: context.user.username });
        return project;
      };
    }

  }
};

export default resolvers;