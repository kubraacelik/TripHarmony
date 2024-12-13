import Tour from "../models/Tour.js";

//!create new tour
export const createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (error) {
    console.error("Hata Detayı:", error); // Hata detaylarını console'a yazdır
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
      error: error.message, // Hata mesajını döndür
    });
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

//!get single tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

//!get all tour
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);

  try {
    //her saydaya 8 adet düşsün
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfull",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

//!get tour by search
export const getTourBySearch = async (req, res) => {
  //RegExp=Metin içinde belirli kalıpları aramak.
  //"i" eşleştirme sırasında büyük/küçük harf duyarlılığını kaldırır.
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  //$gte=belirtilen minimum sayıdan (veya eşit) büyük olan kayıtları getirir
  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfull",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

//!get featured tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successfull",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

//!get counts tour
export const getCountsTour = async (req, res) => {
  try {
    //estimatedDocumentCount():MongoDB'nin, koleksiyondaki belge sayısını hızlıca tahmin etmek için kullandığı bir yöntemdir.
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Failed to fetch" });
  }
};
