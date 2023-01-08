import mongoose from 'mongoose';
// mongoose.connect('mongodb+srv://PedroDono:pd260687@cluster0.tw48ipa.mongodb.net/maxmincotas'); // SUbstitua o link pelo o do seu banco para que funcione.
mongoose.connect('mongodb+srv://bryan_ro:qweasd123@cluster0.qklxrbz.mongodb.net/Cotas');


export default mongoose.connection; 