import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getOrders = (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json({ data: "esto solo lo ven personas con token valido" });
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getOrders };
