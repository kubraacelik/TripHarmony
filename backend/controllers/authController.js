import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//! Kullanıcı Kayıt
export const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10); // Salt (karıştırma değeri) oluşturuluyor
    const hash = await bcrypt.hash(req.body.password, salt); // Şifre, salt ile birlikte hash'leniyor 

    // Yeni Kullanıcı Oluşturma
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    // Veritabanına Kaydetme
    await newUser.save();

    res.status(200).json({ success: true, message: "Successfully created" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ success: false, message: "Failed to create. Try again!" });
  }  
};

//! Kullanıcı Giriş
export const login = async (req, res) => {
  const email = req.body.email;

  try {
    // E-posta ile Kullanıcıyı Bulma
    const user = await User.findOne({ email });

    // Kullanıcı Bulunmazsa Yanıt
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Girilen şifreyi, veritabanındaki şifre ile karşılaştırıyoruz
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // Yanlış Şifre Durumunda Yanıt
    if (!checkCorrectPassword) {
      return res
        .status(401) //yetkiniz yok hatası döner
        .json({ success: false, message: "Incorrect email or password" });
    }

    //user._doc nesnesinde bulunan password ve role özelliklerini ayrı değişkenlere atıyoruz ve 
    //geriye kalan tüm özellikleri (bunlar password ve role dışında kalan özellikler) rest adıyla bir nesnede topluyoruz.
    const { password, role, ...rest } = user._doc;

    // JWT Oluşturma
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY, // Şifreleme anahtarı
      { expiresIn: "15d" } // Token'ın geçerlilik süresi
    );

    // Token'ı Cookie Olarak Gönderme
    res
      .cookie("accessToken", token, {
        httpOnly: true, // Tarayıcıdan erişimi sınırlandırır
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 gün
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
