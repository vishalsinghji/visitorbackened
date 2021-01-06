import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    phone: Number,
    purpose: String,
    name: String,
    address: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;