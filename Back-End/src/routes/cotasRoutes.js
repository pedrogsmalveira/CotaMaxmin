import express from "express";
import { cadastrarCota, verCotas, verCotaPorNome, verCotaporNumero, verCotaporCpf, deletarCota, editarCota } from "../controllers/cotascontrolers.js";
import { validateCpfForCreate, validateCpfForEdit } from "../middleware/cotasValidation.js";

const router = express.Router();

router
    .get("/cotas", verCotas)
    .post("/cotas/nome", verCotaPorNome)
    .post("/cotas/numero", verCotaporNumero)
    .post("/cotas/cpf", verCotaporCpf)
    .post("/cotas", validateCpfForCreate, cadastrarCota)
    .put("/cotas/update/:id", validateCpfForEdit, editarCota)
    .delete("/cotas/:id", deletarCota)
    
export default router;