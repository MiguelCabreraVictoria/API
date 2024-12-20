import {Router} from 'express'

const router = Router()

import * as userCtrl from '../controllers/user.controller'
import {authJwt, verifySignUp} from '../middlewares/index'

router.post('/users',[authJwt.verifyToken, authJwt.isAdmin], userCtrl.createUser)

export default router;
