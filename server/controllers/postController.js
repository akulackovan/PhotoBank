import Post from "../models/Post";

export const createPost = async (req, res) => {
    try {
        const {data, image, city} = req.body

        const newPost = new Post({
            User: req.authenticatorData.userId,
            data: data,
            image: image,
            city: city,
            view: 0,
            likes: 0,
        })

        await newPost.save()
        res.json({
            newPost,
            message: 'Добавлен пост.',
        })
    } catch (error) {
        res.json({message: 'Ошибка при создании нового поста.'})
    }
};

export const deletePost = async (req, res) => {
    try {
        const {postId} = req.body
        await Post.deleteOne(postId)
        res.json({message: 'Пост удален'})
    } catch (error) {
        res.json({message: 'Ошибка при удалении поста'})
    }
};