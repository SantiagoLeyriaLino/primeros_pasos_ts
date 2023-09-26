import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const registerController = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerUser(body);
    res.status(200).json(responseUser);
  } catch (e) {
    handleHttp(res, 'ERROR_REGISTER_USER', e);
  }
};

const loginController = async ({ body }: Request, res: Response) => {
  try{
    const responseUser = await loginUser(body);
    res.status(200).json(responseUser)
  }catch(e){
    handleHttp(res, 'ERROR_LOGIN_USER', e);
  }
};

export { registerController, loginController };
