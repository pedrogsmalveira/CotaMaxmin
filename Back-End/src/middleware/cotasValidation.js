import { response } from "express";
import Cotas from "../models/Cotas.js"

const validateCpf = async (req, res, next) => {
    const { cpf } = req.body;
    
    await Cotas.find({ cpf })
    .then(response => {
        try {
            if(cpf == response[0].cpf) {
                return res.json({message: "CPF repetido"});
            };
        } catch {
            if(cpf.length !== 11) {
                return res.json({message: "CPF invalido"})
            }
            return next()
        }
            
    });

    
};

export {
    validateCpf
}