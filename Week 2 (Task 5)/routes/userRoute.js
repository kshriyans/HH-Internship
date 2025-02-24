import express from "express"
import { fetch, create, update, deleteUser } from "../controller/userController.js"
import {login, signup} from "../controller/authController.js"

import isAuth from '../middleware/authMiddleware.js'
import isAdmin from '../middleware/adminMiddleware.js'
const route = express.Router();

route.post("/create",[isAuth, isAdmin], create);
route.get("/fetch", [isAuth], fetch);
route.put("/update/:id",[isAuth, isAdmin], update);
route.delete("/delete/:id",[isAuth, isAdmin], deleteUser);

route.post("/signup",signup);
route.post("/login",login);

export default route;