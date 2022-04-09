import mongoose from 'mongoose';
const schema = new mongoose.Schema(
    {
        topic: String,
        postedBy: {
            username: String
        },
        liked: Boolean,
        disliked: Boolean,
        verified: Boolean,
        handle: String,
        time: String,
        title: String,
        tuit: String,
        attachments: {
            video: String,
            image: String
        },
        logoImage: String,
        avatarImage: String,
        stats: {
            comments: Number,
            retuits: Number,
            likes: Number,
            dislikes: Number
        }
    }, {collection: 'tuits'});
export default schema;