import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/booking.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

//CORS için yapılandırma yapılır
const corsOptions = {
  origin: true,
  credentials: true,
};

//MongoDB Bağlantısı
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (error) {
    console.log("MongoDB database connection failed");
  }
};

//Middleware Kullanımı
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

//Route'lar
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

//Sunucu Başlatma
app.listen(port, () => {
  connect();
  console.log("Server listening on port", port);
});
