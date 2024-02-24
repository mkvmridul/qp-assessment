import express from 'express';
import dotenv  from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`APP is listening on port: ${PORT}`))