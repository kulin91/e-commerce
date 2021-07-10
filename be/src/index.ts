import express from "express";
import { getGoodById, createGood } from "./services/goods";
import mongoose from 'mongoose';

const connectionStr = "mongodb+srv://ecapp:tyHEQEClMiXQiD3O@ecommerce.qkfyq.mongodb.net/ecommerce"
const app = express();
const port = 5000;

app.get("/goods/:id", getGoodById);
app.get("/goods-create", createGood);

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