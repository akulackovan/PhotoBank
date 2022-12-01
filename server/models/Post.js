import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'UserSchema',
        },
        data: {
            type: String,
            required: true,
        },
        image: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        view: {
            type: mongoose.Schema.Types.Long,
            required: true,
        },
        likes: {
            type: mongoose.Schema.Types.Long,
            required: true,
        },
    },
    {timestamps: true},
)

export default mongoose.model('Post', PostSchema)
