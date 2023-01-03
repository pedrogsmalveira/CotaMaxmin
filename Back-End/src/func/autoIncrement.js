import axios from "axios";
import Cotas from '../models/Cotas.js';

const autoIncrement = async () => {
    const cotas = await Cotas.find();
    
    return cotas[cotas.length - 1].numerodacota + 1;

};

export default autoIncrement;