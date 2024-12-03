import express from "express";
import { ProductController } from "./product.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post("/", auth(UserRole.vendor), ProductController.createProduct);

router.get("/", ProductController.getAllShop);

router.get("/:id", ProductController.getById);

router.delete(
  "/soft/:id",
  auth(UserRole.vendor, UserRole.admin),
  ProductController.softDelete
);

router.delete("/:id", auth(UserRole.admin), ProductController.deleteProduct);

export const ProductRoutes = router;