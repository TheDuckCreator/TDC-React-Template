import express from "express";

import authMiddleWare from "../middleware/auth";
import userController from "../controllers/user";

const router = express.Router();

router.get("/", userController.onReadAll);
router.get("/:id", userController.onReadOne);
router.post("/", authMiddleWare.verifyRequest, userController.onCreateOne);
router.post("/", userController.onLogin);
router.put("/:id", authMiddleWare.verifyRequest, userController.onEditOne);
router.delete("/:id", authMiddleWare.verifyRequest, userController.onDeleteOne);

export default router;
