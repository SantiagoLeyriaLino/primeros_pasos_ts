import { Car } from "../interfaces/car.interfaces";
import ItemeModel from "../models/item";

const orders = async () => {
  const responseItems = await ItemeModel.find({});
  return responseItems;
};


export { orders };