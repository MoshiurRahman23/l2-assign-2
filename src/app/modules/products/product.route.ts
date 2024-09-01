import express from "express";
import { ProductControllers } from "./product.controller";
import { createProductValidationSchema } from "./product.validatuion";
import validateRequest from "../../../middleware/validateRequest";

const router = express.Router()

router.post('/', validateRequest(createProductValidationSchema), ProductControllers.createProduct);

router.get("/:productId", ProductControllers.getSingleProduct);
router.put("/:productId", ProductControllers.updateProduct);
router.delete("/:productId", ProductControllers.deleteProduct);


export const ProductRoutes = router;