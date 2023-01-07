import Cotas from '../models/Cotas.js';

const autoIncrement = async () => {
    const cotas = await Cotas.find();
    
    try {
        return cotas[cotas.length - 1].numerodacota + 1;
    } catch {
        return 1
    }
        
};

export default autoIncrement;