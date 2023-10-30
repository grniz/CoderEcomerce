import { Router } from 'express';
import productController from '../controllers/product.controller.js';

const router = Router();

router.get('/',productController.getAllproducts);
router.post('/',productController.createproduct);
router.put('/:uid',productController.updateproduct);
router.delete('/:uid',productController.deleteproduct);


export default router;