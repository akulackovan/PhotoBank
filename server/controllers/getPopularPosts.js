import User from '../models/User.js';
import Post from "../models/Post.js";

export const getPopular = async (req, res) => {
    try {
        const {userId} = req.body;
        const user = await User.findOne({userId});
        if (!user) {
            return res.status(404).json({
                message: 'Такого пользователя не существует.',
            });
        }
        const city = user.city;
        if (!city) {
            return res.status(404).json({
                message: 'Ошибка в получении города пользователя.',
            });
        }
        const posts = await Post.find({city: city});
        if (!posts) {
            return res.status(404).json({
                message: 'Ошибка в получении постов данного города.',
            });
        }
        if (posts.length > 1) {
            posts.sort(sortByDateAndViews);
        }
        return res.json({
            posts,
            message: 'Пост получен',
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({message: 'Ошибка при получении популярных постов.'});
    }
};

function sortByDateAndViews(first, second) {
    console.log(first)
    return first.timestamps === second.timestamps ?
        first.views - second.views : first.timestamps - second.timestamps;
    // todo или return second.view - first.view;
}
