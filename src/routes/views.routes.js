import { Router } from "express";
import productsDao from "../dao/mdbManagers/products.dao.js";

const viewsRouter = Router();

viewsRouter.get("/productManager", async (req, res) => {
  const products = await productsDao.getAllProducts();
  res.render("productManager", {
    title: "Products Mongoose",
    products,
  });
});

viewsRouter.get("/chat", (req, res) => {
  res.render("chat", {
    title: "Chat",
  });
});

export { viewsRouter };
