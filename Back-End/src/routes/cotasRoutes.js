import express from "express";
import { cadastrarCota, verCotas, verCotaPorNome, verCotaporNumero, verCotaporCpf, deletarCota } from "../controllers/cotascontrolers.js";
import { validateCpf } from "../middleware/cotasValidation.js";

const router = express.Router();

router
    .get("/cotas", verCotas)
    .post("/cotas/nome", verCotaPorNome)
    .post("/cotas/numero", verCotaporNumero)
    .post("/cotas/cpf", verCotaporCpf)
    .post("/cotas", validateCpf, cadastrarCota)
    .delete("/cotas/:id", deletarCota)


export default router;