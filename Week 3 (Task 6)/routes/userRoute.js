import express from "express"
import { fetch, create, update, deleteTodos, fetchall } from "../controller/userController.js"

const route = express.Router();

route.post("/create", create);
route.get("/fetch", fetchall);
route.get("/fetch/:id", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteTodos);


export default route;