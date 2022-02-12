import db from '../db/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import auth from '../utils/auth.js';
import { UserInputError } from 'apollo-server-express';
import validation from '../utils/validation.js';

const resolvers = {
  Query: {
    getProjects: async (parent, args, context) => {
      const projects = await db.models.Project.find();
      return projects;
    }
  },

  Mutation: {
    signUp: async (_, { signUpInput: { username, email, password, confirmPassword }}) => {
      const { valid, errors } = validation(username, email, password, confirmPassword);
      if(!valid){
        throw new UserInputError('Errors', { errors });
      }

      const user = await db.models.User.findOne({ username });
      if(user) {
        throw new UserInputError('this username is already taken', {
          errors: {
            username: 'This username is taken'
          }
        });
      }

      password = await bcrypt.hash(password, 12);

      const newUser = new db.models.User({
        email,
        username,
        password,
        createdAt: new Date().toISOString()
      });

      const res = await newUser.save();

      const token = jwt.sign({
        id: res.id,
        email: res.email,
        username: res.username
      }, process.env.JWT_SECRET, { expiresIn: '1h'});

      return {
        ...res._doc,
        id: res._id,
        token
      };
    },

    createProject: async (_, { projectInput: { projectName, description, owner } }, context, info) => {
    
      const newProject = new db.models.Project({
        projectName,
        description,
        owner,
        createdAt: new Date().toISOString()
      });

      console.log(newProject);
    }
  }
};

export default resolvers;