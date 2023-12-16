import { productModel } from "../models/product.model.js";

class ProductDao {
  async getAllProducts(limit) {
    let query = productModel.find();

    if (limit) {
      query = query.limit(limit);
    }

    return await query.exec();
  }

  async getProductById(id) {
    let product = await productModel.findById(id);
    if (!product) {
      throw new Error("Product not found");
    } else {
      return product;
    }
  }

  async createProduct(product) {
    return await productModel.create(product);
  }

  async updateProduct(id, product) {
    return await productModel.findByIdAndUpdate(id, product);
  }

  async deleteProduct(id) {
    return await productModel.findByIdAndDelete(id);
  }
}

export default new ProductDao();
