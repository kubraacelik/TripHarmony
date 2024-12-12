import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//!user registration
export const register = async (req, res) => {
  try {
    //Şifreyi Hash'leme
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //Yeni Kullanıcı Oluşturma
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    //Veritabanına Kaydetme
    await newUser.save();

    res.status(200).json({ success: true, message: "Successfully created" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again!" });
  }
};

//!user login
export const login = async (req, res) => {
  //E-posta ile Kullanıcıyı Bulma
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });

    //Kullanıcı Bulunmazsa Yanıt
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    //Şifre Doğrulama
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    //Yanlış Şifre Durumunda Yanıt
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    //Bu yöntem, şifreyi ve rolü istemciye göndermemek amacıyla kullanılır
    const { password, role, ...rest } = user._doc;

    //JWT Oluşturma
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY, //Bu token, process.env.JWT_SECRET_KEY ile şifrelenir
      { expiresIn: "15d" } //Token'ın geçerlilik süresi
    );

    //Token'ı Cookie Olarak Gönderme
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        data: { ...rest },
        role,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
