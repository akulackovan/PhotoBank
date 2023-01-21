import User from '../models/User.js';

export const getSubscriptionPosts = async (req, res) => {
    try {
        const {userId} = req.body;
        const user = await User.findOne({userId});
        if (!user) {
            return res.status(404).json({
                message: 'Такого пользователя не существует.',
            });
        }
        const subscriptions = user.subscriptions;
        if (subscriptions == null) {
            return null;
        }
        const returnedPosts = [];
        subscriptions.forEach(current => {
            returnedPosts.push(current.post);
        });
        returnedPosts.sort(sortByDate());
        return returnedPosts;
    } catch (error){
        res.status(400).json({message: 'Ошибка при получении постов.'});
    }
};

function sortByDateAndViews(first, second) {
    console.log(first)
    return first.timestamps === second.timestamps ?
        first.views - second.views : first.timestamps - second.timestamps;
    // todo или return second.view - first.view;
}
