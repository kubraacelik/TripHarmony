import User from "../models/User.js";

//!create new user
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

//!update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id, // Güncellenecek verinin ID'si
      { $set: req.body }, // Güncelleme yapılacak alanlar
      { new: true } // Güncellenmiş veriyi geri döndür
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update. Try again" });
  }
};

//!delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

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

//!get single user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

//!get all user
export const getAllUser = async (req, res) => {

  try {
    //her saydaya 8 adet düşsün
    const users = await User.find({})

    res.status(200).json({
      success: true,
      message: "Successfull",
      data: users,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};
