import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCard.js';
import Cors from 'cors';


//app config
const app = express();
const port = process.env.PORT || 8001
const connection_url = "mongodb+srv://admin:6sjG7xoODJ4TOmd4@cluster0.c0kmf.mongodb.net/tinderdb?retryWrites=true&w=majority"

//middlewares
app.use(express.json());
app.use(Cors())


//db config



mongoose.connect(connection_url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req, response) => response.status(200).send('HELLO WORLD'));
app.post('/tinder/cards', (req,res) =>{
        const dbCards = req.body;
        Cards.create(dbCards, (err, data) => {
                if (err) {
                        res.status(500).send(err)
                }else{
                        res.status(201).send(data)
                }
        });
});
app.get('/tinder/cards', (req,res) =>{
        Cards.find((err, data) => {
                if (err) {
                        res.status(500).send(err)
                }else{
                        res.status(200).send(data)
                }
        });
});

//listners 
app.listen(port, () => console.log(`listening on localhost: ${port}`));
