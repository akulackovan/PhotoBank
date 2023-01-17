import Post from '../models/Post.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const getPostById = async (req, res) => {
    try {
        const {id} = req.body
        const isPost = await Post.findById({id})
        if (isPost) {
            return isPost
        }
        return res.status(400).json({
            message: 'Поста не существует'
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Ошибка при получении поста'
        })
    }
}
