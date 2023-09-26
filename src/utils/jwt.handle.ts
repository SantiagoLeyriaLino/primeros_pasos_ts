import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: "1d" });
  return jwt;
};

const verifyToken = async (token: string) => {};

export { generateToken, verifyToken };
