import Post from "../models/Post";

export const createPost = async (req, res) => {
    try {
        const {data, image, city} = req.body;
        if (!data || !image || !city) {
            return res.status(404).json({
                message: 'Ошибка в получении данных.',
            });
        }
        const newPost = new Post({
            User: req.authenticatorData.userId,
            data: data,
            image: image,
            city: city,
            view: 0,
            likes: 0,
        });
        await newPost.save();
        res.json({
            newPost,
            message: 'Добавлен пост.',
        });
    } catch {
        res.json({message: 'Ошибка при создании нового поста.'});
    }
};

export const deletePost = async (req, res) => {
    try {
        const {postId} = req.body;
        await Post.deleteOne(postId);
        res.json({message: 'Пост удален'});
    } catch {
        res.json({message: 'Ошибка при удалении поста'});
    }
};