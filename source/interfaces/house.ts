import { Document } from "mongoose";

export default interface IHouse extends Document {
  title: string;
  description: string;
  imgURL: string;
  position: number[];
}
