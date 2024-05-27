import express from 'express';
import DBconncetion from './config/dbConfig.js';
import dotenv from 'dotenv';
import registerAssets from './routes/reggisterAssets.route.js'


dotenv.config();

const app = express();
const PORT = 8000;
const lochalHost = 'http://localhost:8000'

app.use(express.json()); 

app.get('/', (req,res) => {
    res.send("Fixed assests");
})

app.use("/regigster", registerAssets);


DBconncetion().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at ${lochalHost}`);
        console.log("listening for requests");
    })
})