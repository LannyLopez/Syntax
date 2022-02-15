import mongoose from 'mongoose';

import Project from './Project.js';
import User from './User.js';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/graphql_demo');

const db = {
  connection: mongoose.connection,
  models: {
    User,
    Project
  }
};

export default db;
