import User from '../models/User.js';

export const getSubscriptionPosts = async (req, res) => {
    try {
        const {userId} = req.body;
        const user = await User.findOne({userId});
        if (!user) {
            return res.status(404).json({
                message: 'Такого пользователя не существует',
            });
        }
        const [subscriptions] = user.subscriptions;
        if (subscriptions == null) {
            return null;
        }
        const [returnedPosts] = [];
        subscriptions.forEach(current => {
            returnedPosts.push(current.post);
        });
        returnedPosts.sort(sortByDate());
        return returnedPosts;
    } catch {
        res.status(402).json({message: 'Ошибка при получении подписных постов'});
    }
};

function sortByDate(first, second) {
    return first.timestamps - second.timestamps;
    // todo или return second.timestamps - first.timestamps;
}