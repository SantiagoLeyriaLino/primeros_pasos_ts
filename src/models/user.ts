import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interfaces";

const UserSchema = new Schema<User>(
  {
    name:{
      required:true,
      type:String
    },
    password:{
      required:true,
      type:String
    },
    email:{
      required:true,
      unique:true,
      type:String
    },
    description:{
      type:String,
      default:"description"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("users", UserSchema);

export default UserModel;
