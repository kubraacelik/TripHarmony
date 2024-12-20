import mongoose from "mongoose";

//* Mongoose kullanarak bir "User" veri modeli tanımlandı.

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
  },

  { timestamps: true }
);

export default mongoose.model("User", userSchema);
