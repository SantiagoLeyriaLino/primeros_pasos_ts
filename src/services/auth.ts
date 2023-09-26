import { Auth } from "../interfaces/auth.interfaces";
import { User } from "../interfaces/user.interfaces";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerUser = async ({ email, password, name, description }: User) => {
  const checkIs = await UserModel.findOne({ email: email });
  if (checkIs) throw new Error("User already exists");

  const passwordHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passwordHash,
    name,
    description,
  });

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email: email });
  if (!checkIs) throw new Error("User not found");

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) throw new Error("Password incorrect");

  const token = generateToken(checkIs.email);
  const data = { token, user: checkIs};
  return data;
};

export { registerUser, loginUser };
