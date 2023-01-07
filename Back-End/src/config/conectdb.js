import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://bryan_ro:qweasd123@cluster0.qklxrbz.mongodb.net/Cotas');
// mongoose.connect('mongodb+srv://PedroDono:pd260687@cluster0.tw48ipa.mongodb.net/maxmincotas');

export default mongoose.connection; 