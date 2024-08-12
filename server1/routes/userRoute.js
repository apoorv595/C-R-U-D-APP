import express from "express";
import { create, Delete, getAll, getOne, upDate } from "../controller/userontroller.js";

const route =express.Router();
route.post("/create",create);
route.get("/getall",getAll);
route.get("/getone/:id",getOne);
route.put("/update/:id",upDate);
route.delete("/delete/:id",Delete);

export default route;