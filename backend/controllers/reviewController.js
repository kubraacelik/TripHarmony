import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

//!Yorum ekleme
export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id }, //Bir dizinin sonuna yeni bir eleman ekler.
    });

    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to submit" });
  }
};
