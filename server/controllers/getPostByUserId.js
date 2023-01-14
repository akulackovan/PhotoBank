import Post from '../models/Post.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const getPostByUserId = async (req, res) => {
    try {
        const {idUser} = req.body
        const {options} = {
            projection: {_id: 0, username: 0, password: 0, city: 0, image: 0, posts: 1, subscriptions: 0}
        }
        const isUser = await User.findById({idUser}, {options})

        if (isUser) {
            return isUser
        }
        return res.status(400).json({message: 'Пользователя не существует'})

    } catch (error) {
        return res.status(400).json({message: 'Ошибка при получении постов пользователя'})
    }
}
