import {Router} from "express"
import {getMe, login, register} from '../controllers/auth.js'

const router = new Router()

router.post('/reg', register)
router.post('/login', login)
router.get('/profile', getMe)

export default router