import express from "express";
import { UserRouter } from "../modules/User/user.router";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { ShopRoutes } from "../modules/Shop/shop.router";
import { ProductRoutes } from "../modules/Product/product.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRouter,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/shop",
    route: ShopRoutes,
  },
  {
    path: "/product",
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
