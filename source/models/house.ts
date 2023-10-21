import mongoose, { Schema } from "mongoose";
import IHouse from "../interfaces/house";

const HouseSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    imgURL: { type: String, required: false },
    position: { type: Array<number>, required: true },
  },
  {
    timestamps: true,
  },
);

// HouseSchema.post<IHouse>("save", function () {
//   logging.info("Mongo", "Checkout the house we just saved: ", this);
// });

export default mongoose.model<IHouse>("House", HouseSchema);
