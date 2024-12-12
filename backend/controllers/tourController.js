import Tour from "../models/Tour.js";

//!create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

//!update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id, // Güncellenecek verinin ID'si
      { $set: req.body }, // Güncelleme yapılacak alanlar
      { new: true } // Güncellenmiş veriyi geri döndür
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update. Try again" });
  }
};

//!delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete. Try again" });
  }
};

//!getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

//!getAll tour
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);

  try {
    //her saydaya 8 adet düşsün
    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);

    res
      .status(200)
      .json({
        success: true,
        count: tours.length,
        message: "Successfull",
        data: tours,
      });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};
