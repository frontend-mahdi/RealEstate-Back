import express from "express";
import controller from "../controllers/house";

const router = express.Router();

router.post("/house", controller.createHouse);
// router.get("/get/books", controller.getAllBooks);
// router.get("/test", controller.getTest);

export = router;
