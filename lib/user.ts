import mongoose, { Document, Model } from "mongoose";
import bcrypt from "bcryptjs";
import dbConnect from "./db";

// 1. Create an interface representing a document in MongoDB.
export interface IUser extends Document {
  email: string;
  password?: string; // Make password optional as it won't be returned in every query
}

const UserSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: [true, "Please provide an email."],
    unique: true,
    match: [/.+\@.+\..+/, "Please provide a valid email address."],
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    minlength: [6, "Password should be at least 6 characters long."],
    select: false, // so that password is not returned by default
  },
});

UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  if (this.password) {
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export async function createUser(email: string, password: string) {
  await dbConnect();
  const user = await User.create({ email, password });
  return { email: user.email };
}

export async function findUserByEmail(email: string) {
  await dbConnect();
  const user = await User.findOne({ email }).select("+password").lean<IUser>();
  if (user) {
    return { email: user.email, passwordHash: user.password as string };
  }
  return null;
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
} 