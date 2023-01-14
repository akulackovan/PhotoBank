import User from '../models/User.js';
import Post from "../models/Post.js";

export const getPopular = async (req, res) => {
    try {
        const {userId} = req.body;
        const user = await User.findOne({userId});
        if (!user) {
            return res.status(404).json({
                message: 'Такого пользователя не существует',
            });
        }
        const city = await User.findOne({user});
        if (!city) {
            return res.status(404).json({
                message: 'Ошибка в получении города пользователя',
            });
        }
        const [posts] = await Post.findByCity({city});
        if (!posts) {
            return res.status(404).json({
                message: 'Ошибка в получении постов данного города',
            });
        }
        posts.sort(sortByViews());
        return posts;
    } catch {
        res.status(400).json({message: 'Ошибка при получении популярных постов'});
    }
};

function sortByViews(first, second) {
    return first.view - second.view;
    // todo или return second.view - first.view;
}
