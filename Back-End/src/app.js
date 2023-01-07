import express from 'express';
import db from './config/conectdb.js';
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import handlebars from "express-handlebars"
import cors from "cors";

db.on('error', () => {
    console.log('error');
})
db.once('open', () => {
    console.log('Sucesso');
});

const app = express();
app.use(cors())

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

routes(app) 

export default app;