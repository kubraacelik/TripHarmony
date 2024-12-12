import jwt from "jsonwebtoken";

//!Token doğrulama
export const verifyToken = (req, res, next) => {
  //Token Alımı
  const token = req.cookies.accessToken;

  //Token Kontrolü
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "You're not authorize" });
  }

  //JWT Doğrulama
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "token is invalid" });
    }

    //Kullanıcı Verisinin İletilmesi
    req.user = user;
    next();
  });
};

//!Kullanıcı doğrulama
export const verifyUser = (req, res, next) => {
  //Token doğrulandıktan sonra, bir callback fonksiyonu çalıştırılır.
  verifyToken(req, res, next, () => {
    //Kimlik Kontrolü
    if (req.user.id == req.params.id || req.user.role == "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You're not authenticated" });
    }
  });
};

//!Admin doğrulama
export const verifyAdmin = (req, res, next) => {
  //Token doğrulandıktan sonra, bir callback fonksiyonu çalıştırılır.
  verifyToken(req, res, next, () => {
    //Rol Kontrolü
    if (req.user.role == "admin") {
      next();
    } else {
      return res.status(401).json({ success: false, message: "You're not authorize" });
    }
  });
};
