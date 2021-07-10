import { Request, Response } from "express";
import { GoodModel } from "../models/good";

export async function getGoodById(_: Request, res: Response) {
  const item = await GoodModel.findOne();
  res.send(item);
}

export async function createGood(_: Request, res: Response) {
  const model = new GoodModel({
    title: "Abc",
    description: "asdasdasdasdasd",
    category: "123",
    imgSrc: "1",
    price: 1000,
    isDelete: false,
  });
  const result = await model.save();
  res.send(result);
}
