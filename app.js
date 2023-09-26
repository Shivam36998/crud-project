import express from 'express';
import {join} from 'path';
import { connectdb } from './db/connectDB.js';
import web from './routes/web.js';

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

connectdb(DATABASE_URL);

// urlencoded
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.use(express.static(join(process.cwd(), "public")));

app.get('/student', web);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})