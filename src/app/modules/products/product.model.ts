import { Schema, model } from 'mongoose';
import { Inventory, Product, Variant } from './product.interface';

// 2. Create a Schema corresponding to the document interface.
const VariantSchema = new Schema<Variant>({
    name: { type: String, required: true },   // Correctly required string
    value: { type: String, required: true },  // Correctly required string
});

const InventorySchema = new Schema<Inventory>({
    quantity: { type: Number, required: true }, // Correctly required number
    inStock: { type: Boolean, required: true }, // Correctly required boolean
});

const ProductSchema = new Schema<Product>({
    name: { type: String, required: true },        // Correctly required string
    description: { type: String, required: true }, // Correctly required string
    price: { type: Number, required: true },       // Correctly required number
    category: { type: String, required: true },    // Correctly required string
    tags: {
        type: [String],  // Corrected to be an array of strings
        enum: {
            values: ["smartphone", "Apple", "iOS"],
            message: '{VALUE} Not Valid, Tags Should be "smartphone", "Apple", "iOS"'
        },
        required: true
    },
    variants: {
        type: [VariantSchema],  // Corrected to be an array of VariantSchema
        required: true
    },
    inventory: {
        type: InventorySchema,  // Correctly required InventorySchema
        required: true
    }
});

export const ProductModel = model<Product>("Product", ProductSchema);
