import { Car } from "../interfaces/car.interfaces";
import ItemeModel from "../models/item";

const insertCar = async (item: Car) => {
  const responseInsert = await ItemeModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseItems = await ItemeModel.find({});
  return responseItems;
};

const getCar = async (id: string) => {
  const responseItems = await ItemeModel.findOne({ _id: id });
  return responseItems;
};

const updateCar = async (id: string, data: Car) => {
  const responseItems = await ItemeModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItems;
};

const deleteCar = async (id: string) => {
  const responseItems = await ItemeModel.findOneAndDelete({ _id: id });
  return responseItems;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
