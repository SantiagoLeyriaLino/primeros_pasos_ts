import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from "../services/item";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseItem = await getCar(id);
    const data = responseItem ? responseItem : "DATA_NOT_FOUND";
    res.status(200).json(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const responseItems = await getCars();
    res.status(200).json(responseItems);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMs");
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const responseItem = await updateCar(id, data);
    res.status(200).json(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.status(200).json(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseItem = await deleteCar(id);
    res.status(200).json(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
