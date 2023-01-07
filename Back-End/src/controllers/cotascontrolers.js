import Cotas from '../models/Cotas.js';
import autoIncrement from "../func/autoIncrement.js"


const verCotas = (req, res) => {
    Cotas.find((err, cotas) => {
        if(err) {
            return res.json({message: err});
        };

        return res.json(cotas);
    });
};

const verCotaPorNome = (req, res) => {
    const { donodacota } = req.body
    
    Cotas.find({ donodacota })
      .then(response => {
        return res.json(response);
      })
      .catch(err => {
        return res.json({ message: err });
      });
};

const verCotaporNumero = (req, res) => {
    const { numerodacota } = req.body;

    Cotas.find({ numerodacota })
    .then(response => {
        return res.json(response);
      })
      .catch(err => {
        return res.json({ message: err });
      });
};

const verCotaporCpf = (req, res) => {
    const { cpf } = req.body;

    Cotas.find({ cpf })
    .then(response => {
        return res.json(response);
      })
      .catch(err => {
        return res.json({ message: err });
      });
};

const cadastrarCota = async (req, res) => {
  const { donodacota, dependentes, cpf, email } = req.body;

  const cota = new Cotas({
    "donodacota": donodacota.toUpperCase(),
    "numerodacota": await autoIncrement(),
    "dependentes": dependentes.toUpperCase(),
    cpf,
    "email": email.toLowerCase()
  });

   cota.save((err) => {
        if(err) {
            return res.status(400).json({message: err});
        };

        return res.status(201).json({message: "Cadastrado com sucesso"});
   });

};


const deletarCota = (req, res) => {
  const id = req.params.id;

  Cotas.findByIdAndDelete(id, (err) => {
    if(err) {
      return res.json({message: err});
    };

    return res.json({message: "Deletado com sucesso"});
  });
};


export {
    cadastrarCota,
    verCotas,
    verCotaPorNome,
    verCotaporNumero,
    verCotaporCpf,
    deletarCota
};