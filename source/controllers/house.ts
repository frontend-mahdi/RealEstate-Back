import { NextFunction, Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import House from "../models/house";

const createHouse = async (req: Request, res: Response, next: NextFunction) => {
  let { title, description, imgURL, position } = req.body;

  const house = new House({
    _id: new mongoose.Types.ObjectId(),
    title,
    description,
    imgURL,
    position,
  });

  try {
    const result = await house.save();
    return res.status(201).json({
      house: result,
    });
  } catch (err) {
    const error = err as Error;
    return res.status(500).json({
      message: error.message,
      error,
    });
  }
};

export default { createHouse };
