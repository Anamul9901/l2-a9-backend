"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.post("/", user_controller_1.UserController.createUser);
router.post("/create-admin", (0, auth_1.default)(client_1.UserRole.admin), user_controller_1.UserController.createAdmin);
router.get("/", (0, auth_1.default)(client_1.UserRole.admin), user_controller_1.UserController.getAllUsers);
router.get("/me", (0, auth_1.default)(client_1.UserRole.vendor, client_1.UserRole.admin, client_1.UserRole.customer), user_controller_1.UserController.getSingleUser);
router.patch("/:id", (0, auth_1.default)(client_1.UserRole.admin), user_controller_1.UserController.updateSingleUser);
exports.UserRouter = router;
