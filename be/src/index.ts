import express from "express";
const bodyParser = require("body-parser");

import { getGoodById, updateGood, getAllGood, createGood, deleteGood, hideGood } from "./services/goods";
import mongoose from 'mongoose';

const connectionStr = "mongodb+srv://ecapp:tyHEQEClMiXQiD3O@ecommerce.qkfyq.mongodb.net/ecommerce"
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/goods/:id", getGoodById);
app.get("/goods", getAllGood);
app.put("/goods/:id", updateGood);
app.post("/goods", createGood);
app.delete("/goods/:id", deleteGood);
app.put("/goods/:id", hideGood);



async function startServer() {
  await mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  console.log("DB connected!");
  
  app.listen(port, () => {
    console.log(`Server started on ${port}`);
  });
}

startServer();