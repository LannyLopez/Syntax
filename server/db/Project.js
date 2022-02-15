import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
    },
    createdAt: {
        type: String
    }
});

const Project = mongoose.model("Project", ProjectSchema);

export default Project;