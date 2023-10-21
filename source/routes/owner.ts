import express from "express";
import controller from "../controllers/house";

const router = express.Router();

router.post("/house", controller.createHouse);
router.get("/houses", controller.getAllHouses);
// router.get("/test", controller.getTest);

export = router;
