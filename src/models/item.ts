import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interfaces";

const ItemSchema = new Schema<Car>(
  {
    color: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ["gasoline", "electric"],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemeModel = model("items", ItemSchema);

export default ItemeModel;
