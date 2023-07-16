import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import routes from './Routes/route.js';

const app=express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use('/', routes);

const PORT = process.env.PORT||8000;

Connection();

app.listen(PORT, () => console.log(`your server is running successfully on port ${PORT}`));