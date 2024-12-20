import {Router} from 'express'
const router = Router()

import * as productsCtrl from '../controllers/products.controller'
import {authJwt} from '../middlewares/index'


router.post('/products', [authJwt.verifyToken, authJwt.isModerator],  productsCtrl.createProduct);

router.get('/products',  productsCtrl.getProducts);
router.get('/products/:productId',  productsCtrl.getProductById);

router.put('/products/:productId', authJwt.verifyToken,  productsCtrl.updateProductById);

router.delete('/products/:productId', authJwt.verifyToken, productsCtrl.deleteProductById);

export default router;
