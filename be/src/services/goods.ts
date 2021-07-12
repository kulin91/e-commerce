import { Request, Response } from "express";
import { GoodModel } from "../models/good";

export async function getGoodById(req: Request, res: Response) {
  const item = await GoodModel.findById(req.params.id);
  res.send(item);
}

export async function getAllGood(_: Request, res: Response) {
  const item = await GoodModel.find();
  res.send(item);
}

export async function updateGood(req: Request, res: Response) {

  const item: any = await GoodModel.findById(req.params.id);

  item.title = req.body.title;
  item.description = req.body.description;
  item.category = req.body.category;
  item.imgSrc = req.body.imgSrc;
  item.price = req.body.price;

  await item.save();
  res.send(item);
}

export async function createGood(req: Request, res: Response) {

  const item: any = new GoodModel({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    imgSrc: req.body.imgSrc,
    price: req.body.price,
    isDelete: false,
  });

  await item.save();
  res.send(item);
}

export async function deleteGood(req: Request, res: Response) {

  const item: any = await GoodModel.findById(req.params.id);
  await item.deleteOne();
  res.send(item);
}


export async function hideGood(req: Request, res: Response) {

  const item: any = await GoodModel.findById(req.params.id);

  item.isDelete = req.body.isDelete;

  await item.save();
  res.send(item);
}
