import express from "express";
import { listarEventos, listarPorCategoria, listarPorLocal } from "../controllers/eventosController.js";

const router = express.Router();

router.get("/eventos", listarEventos);
router.get("/eventos/categoria/:categoria", listarPorCategoria);
router.get("/eventos/local/:local", listarPorLocal);

export default router;
