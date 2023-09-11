import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  res.status(400).json({ error_tipe: error, error_message: errorRaw.message });
};

export { handleHttp };
