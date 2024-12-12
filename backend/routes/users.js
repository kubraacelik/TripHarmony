import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//*NOT: verifyUser - Kullanıcı doğrulaması yapılır ve yalnızca kullanıcı kendi bilgilerine erişebilir. Admin kullanıcılar da başka kullanıcıların bilgilerine erişebilir.
//*NOT: verifyAdmin — Sadece admin kullanıcıları bu işlemi yapabilir. Yani admin rolüne sahip olmayan kullanıcıların bu route'a erişimi engellenir.

//update user
router.put("/:id", verifyUser, updateUser);

//delete user
router.delete("/:id", verifyUser, deleteUser);

//get single user
router.get("/:id", verifyUser, getSingleUser);

//get all user
router.get("/", verifyAdmin, getAllUser);

export default router;
