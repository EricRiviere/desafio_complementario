import { cartModel } from "../models/cart.model.js";
import { productModel } from "../models/product.model.js";

class CartDao {
  async getAllCarts() {
    return await cartModel.find();
  }

  async getCartById(id) {
    let cart = await cartModel.findById(id);
    if (!cart) {
      throw new Error("Cart not found");
    } else {
      return cart;
    }
  }

  async createCart() {
    return await cartModel.create({});
  }

  async addProductToCart(cartId, productId) {
    const cart = await cartModel.findById(cartId);
    if (!cart) {
      throw new Error("Cart not found");
    }
    const product = await productModel.findById(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    const existingProduct = cart.products.find((product) =>
      product.productId.equals(productId)
    );
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.products.push({ productId: productId, quantity: 1 });
    }
    return await cart.save();
  }
}

export default new CartDao();
