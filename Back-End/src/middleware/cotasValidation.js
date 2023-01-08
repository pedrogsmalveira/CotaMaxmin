import Cotas from "../models/Cotas.js"

const validateCpfForCreate = async (req, res, next) => {
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
            return next();
        };  
    });
};

const validateCpfForEdit = async (req, res, next) => {
    const { id, cpf } = req.body;
    
    await Cotas.find({ cpf })
    .then(response => {
        try {
            if(cpf == response[0].cpf && id != response[0]._id) {
                return res.json({message: "CPF repetido"});
            } else {
                return next()
            }
        } catch {
            if(cpf.length !== 11) {
                return res.json({message: "CPF invalido"})
            }
            return next();
        };  
    });
};

export {
    validateCpfForCreate,
    validateCpfForEdit
}