import mongoose from 'mongoose';

const cotasSchema =  new mongoose.Schema( 
    {
    id:{
        type: String
    },
    donodacota:{
        type: String
    },
    numerodacota:{
        type: Number,
    },
    dependentes:{
        type: String
    },
    cpf:{
        type: String
    },
    email:{
        type: String
    }
    },
    {
        versionKey: false
    }
);


const cotas = mongoose.model('cotasmx', cotasSchema);
export default cotas;