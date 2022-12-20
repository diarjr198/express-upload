import express from "express";
import upload from "../middlewares/upload_mdw.js";
import upload_create from "../controllers/upload_controller.js";

const upload_route = express.Router();

upload_route.post("/api/upload/create", upload.single("file"), upload_create);

export default upload_route;
