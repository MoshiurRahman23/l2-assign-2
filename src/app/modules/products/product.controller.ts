import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {

        const product = req.body

        const result = ProductServices.createProductIntoDB(product);
        res.status(200).json({
            success: true,
            message: "Product is Created Successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const searchQuery = req?.query?.searchTerm;
        const result = await ProductServices.getAllProductsFromDB(
            searchQuery as string
        );

        res.status(200).json({
            success: true,
            message: "Products are retrieved succesfully",
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
};

const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;

        const result = await ProductServices.getSingleProductFromDB(productId);

        res.status(200).json({
            success: true,
            message: "Product is retrieved succesfully",
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
};
const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = await ProductServices.updateProductIntoDB(id, req.body);
        res.status(200).json({
            success: true,
            message: "Product is updated succesfully",
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
};
const deleteProduct = async (req: Request, res: Response) => {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
        success: true,
        message: "Product is deleted succesfully",
        data: result,
    });
};

export const ProductControllers = {
    createProduct,
    updateProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
}