import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String, //convertim o imagine intr-un string cu base64
    likes: {
        type: [String], // un obiect de tip string
        default: [], // empty array
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const PostMessage = mongoose.model('PostMessage', postSchema); //încarcam schema postarii ca si colecția PostMessage in bd 

export default PostMessage;