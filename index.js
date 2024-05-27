import express from 'express';
import DBconncetion from './config/dbConfig.js';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = 8000;

app.get('/', (req,res) => {
    res.send("Fixed assests");
})

app.get('/getdata', (req,res) => {
    res.json({
        "name": "Sun Bahadur",
        "caste" : "Dalit"
    })
})


DBconncetion().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`);
        c
        onsole.log("listening for requests");
    })
})