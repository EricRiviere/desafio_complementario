import { Router } from "express";
import cartsDao from "../dao/mdbManagers/carts.dao.js";

const CartsRouter = Router();

CartsRouter.get("/", async (req, res) => {
  try {
    let carts = await cartsDao.getAllCarts();
    res.json({
      status: "success",
      carts,
    });
  } catch (error) {
    res.json({
      status: "Error",
      error,
    });
  }
});

CartsRouter.post("/", async (req, res) => {
  try {
    let cart = await cartsDao.createCart();
    res.json({
      status: "success",
      cart,
    });
  } catch (error) {
    res.json({
      status: "Error",
      error,
    });
  }
});

CartsRouter.get("/:cid", async (req, res) => {
  try {
    let cid = req.params.cid;
    let cart = await cartsDao.getCartById(cid);
    res.json({
      status: "success",
      cart,
    });
  } catch (error) {
    res.send(error.message);
  }
});

CartsRouter.post("/:cid/product/:pid", async (req, res) => {
  try {
    let cid = req.params.cid;
    let pid = req.params.pid;
    let response = await cartsDao.addProductToCart(cid, pid);
    res.json({
      status: "success",
      response,
    });
  } catch (error) {
    res.send(error.message);
  }
});

export { CartsRouter };
