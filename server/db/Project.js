import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    createdAt: {
        type: String
    }
});

const Project = mongoose.model("Project", ProjectSchema);

export default Project;