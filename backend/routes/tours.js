import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getCountsTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  updateTour,
} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//*app.use("/api/v1/tours", tourRoute); olduğu için örneğin getTourBySearch'te /api/v1/tours/search/getTourBySearch olursa çalışır

//create new tour
router.post("/", verifyAdmin ,createTour);

//update tour
router.put("/:id", verifyAdmin, updateTour);

//delete tour
router.delete("/:id", verifyAdmin, deleteTour);

//get single tour
router.get("/:id", getSingleTour);

//get all tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

//get featured tour
router.get("/search/getFeaturedTour", getFeaturedTour);

router.get("/search/getCountsTour", getCountsTour);

export default router;
