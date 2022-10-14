import express from "express";
const router = express.Router();

import {
  createCategories,
  getCategories,
  createTransaction,
  getTransaction,
  deleteTransaction,
  getLabels,
} from "../controllers/controller.js";

router.post("/categories", createCategories);
router.get("/categories", getCategories);

router.post("/transaction", createTransaction);
router.get("/transaction", getTransaction);
router.delete("/transaction", deleteTransaction);

router.get("/labels", getLabels);

export default router;
